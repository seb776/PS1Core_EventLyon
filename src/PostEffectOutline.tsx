import * as THREE from 'three'
import { useMemo, forwardRef } from 'react'
import { BlendFunction, Effect, EffectAttribute, WebGLExtension } from 'postprocessing'
import glslify from 'glslify';


// Cannot easily put it in a separate file as it requires async loading which is hard to do with the Effect extend class
// as it would require an async constructor
const postFXOutlineShader = glslify(`

  uniform float iTime;
  uniform mat4 projectionMatrix;
  
  #define sat(a) clamp( a, 0.0, 1.0 )

  void mainImage(vec4 v,vec2 r,out vec4 i)
  {
    vec2 uv = r.xy;// / iResolution.xy;
    
    vec3 col = mix(v.xyz, vec3(0.), sat(fwidth(v.x)*5.)); // Cheap & dirty outline


    const float SAMPLES = 4.;
    vec3 curSample = texture(inputBuffer, r).xyz;
    float curDepth = (readDepth(r));
    col = curSample;
    float outline = 0.;
    for (float i = 0.; i < SAMPLES; i++) {
      float f  =i / SAMPLES;
      float rad = 0.0005;//mix(0.001,.001, f);
      float an = mix(0., 6.28, f);
      vec2 pos = vec2(sin(an), cos(an)) * rad;//*vec2(1.,iResolution.x/iResolution.y);
      vec3 sample_ = texture(inputBuffer, r+pos).xyz;
      float sampleDepth = (readDepth(r+pos));
      // float lum = dot(vec3(0.30, 0.59, 0.11), color.xyz);
      float diff = pow(abs(curDepth-sampleDepth),1.);//pow(sat((curDepth-sampleDepth)), 10.);// pow(length(curSample - sample_),.75);
      outline += diff;// > .001 ? 1. : 0.;//sat(diff);
    }
    outline /= SAMPLES;

    outline = pow(outline,1.8)*115525.*(1.-curDepth); // TODO not ideal

    // Dirty hack to avoid drawing outline for the outside map
    if (v.w > 1.5) {
      outline = 0.;
    }

    col = mix(col, vec3(0.,0.,0.), sat(outline));    
    float testDepth= readDepth(r);
    col = mix(col,vec3(0.49, 0.56, 1.79)*.5, .3*sat(1.-exp(16.+-testDepth*20.5)));
    col = mix(col,  vec3(0.49, 0.56, 1.79), .4*sat(1.-exp(35.+-testDepth*40.5))); // Second optional fog to blur skybox / mesh intersection
    
    i = vec4(col, 1.);
    i = dither(r, col)
  }
`);

export class OutlineDepthBasedEffect extends Effect {
  constructor({
    blendFunction = BlendFunction.NORMAL,
    iResolution = [0, 0],
  } = {}) {
    super('OutlineDepthBasedEffect', postFXOutlineShader, {
      blendFunction,
      uniforms: new Map<string, THREE.Uniform>([
        ['iTime', new THREE.Uniform(0)],
        ['iResolution', new THREE.Uniform(iResolution)]
      ]),
      attributes: EffectAttribute.DEPTH | EffectAttribute.CONVOLUTION,
      extensions: new Set([WebGLExtension.FRAG_DEPTH]),
    })
  }

  update(renderer: THREE.WebGLRenderer, inputBuffer: THREE.WebGLRenderTarget, deltaTime?: number) {
    const iTime = this.uniforms.get('iTime')
    if (iTime) {
      iTime.value += deltaTime;
    }
  }
}

type OutlineDepthBasedProps = ConstructorParameters<typeof OutlineDepthBasedEffect>[0] & {
}

export const OutlineDepthBased = forwardRef<OutlineDepthBasedEffect, OutlineDepthBasedProps>(({ ...props }, ref) => {
  const effect = useMemo(() => new OutlineDepthBasedEffect(props), [props])
  return <primitive ref={ref} object={effect} dispose={null} />
})
