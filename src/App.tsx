import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Environment, OrbitControls, PerspectiveCamera, Text3D } from '@react-three/drei'
import { DotScreen, EffectComposer } from '@react-three/postprocessing'
import { OutlineDepthBased } from './PostEffectOutline'
import * as THREE from 'three'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js'

function DebugCam() {
  return <>

  </>
}

function App() {
  const gltf = useLoader(GLTFLoader, '/3D/WeirdMesh/24_09_30_11_11_50_296.gltf')
  const gltfWeirdo2 = useLoader(GLTFLoader, '/3D/Weirdo2/24_10_09_13_32_19_280.gltf')
  // const gltfFish = useLoader(GLTFLoader, '/3D/japanese_koi_fish_in_psxps1_style/scene.gltf')
  // const gltfCat = useLoader(GLTFLoader, '/3D/cat_ps1_low_poly_rigged/scene.gltf')
  const waterTex = useLoader(TextureLoader, 'Water.jpg')
  const landTex = useLoader(TextureLoader, 'Landscape.jpg')
  const rep = 15;
  waterTex.repeat = new THREE.Vector2(rep, rep)
  waterTex.wrapS = waterTex.wrapT = THREE.RepeatWrapping;
  const refCam = useRef<THREE.PerspectiveCamera>(null);

  const refMaterials = useRef<THREE.ShaderMaterial[]>([]);
  const refMaterials2 = useRef<THREE.ShaderMaterial[]>([]);

  function setupAnimation() {
    console.log(gltfWeirdo2.scene);
    // Background weirdo
    gltfWeirdo2.scene.children.forEach(child=>{
      (child as any).material.onBeforeCompile = (shader) => {
        refMaterials2.current!.push(shader);
        shader.uniforms.time = {value: 0}
        shader.vertexShader = `uniform float time;
        ` + shader.vertexShader;
        
        shader.vertexShader = `#define sat(a) clamp(a, 0., 1.)
        #define rot(a) mat2(cos(a), -sin(a), sin(a), cos(a))
        ` + shader.vertexShader;
        
        const token = "#include <begin_vertex>"
        const customTransform = /*glsl*/`
        vec3 transformed = vec3(position);
        transformed.x = position.x + 0.*25.0*(
          sin(2.*time+position.y*.05) +
          sin(3.*time+position.y*.2)*.5 +
          sin(8.*time+position.y*.8)*.25
        )
        *pow(sat((position.y+250.)*.5), 5.);
        vec2 off = vec2(0.,100);
        transformed.xy -= off;
        transformed.xy *= rot(sin(transformed.z*.03+time)*.5);
        transformed.xy += off;
        transformed.zy *= rot(asin(sin(time*6.))*.1);
        `
        shader.vertexShader = shader.vertexShader.replace(token,customTransform)

      }
    });
    
    // foreground weirdo
    // console.log(gltf.scene);
    gltf.scene.children.forEach(child=>{
      (child as any).material.onBeforeCompile = (shader) => {
        refMaterials.current!.push(shader);
        shader.uniforms.time = {value: 0}
        shader.vertexShader = `uniform float time;
        ` + shader.vertexShader;

        shader.vertexShader = `#define sat(a) clamp(a, 0., 1.)
        ` + shader.vertexShader;
        
        const token = "#include <begin_vertex>"
        const customTransform = /*glsl*/`
            vec3 transformed = vec3(position);
            transformed.x = position.x + 25.0*(
              sin(2.*time+position.y*.05) +
              sin(3.*time+position.y*.2)*.5 +
              sin(8.*time+position.y*.8)*.25
            )

            *pow(sat((position.y-250.)*.5), 5.);
            `
        shader.vertexShader = 
              shader.vertexShader.replace(token,customTransform)
      }
    });
  }
  

  useEffect(()=>{
    setupAnimation();
    const INTERVAL = 1000/30;
    let time = 0;
    setInterval(()=>{
      if (refMaterials.current) {
        refMaterials.current.forEach(mat=>{
          if ((mat as any).uniforms) {
            (mat as any).uniforms.time.value = time/1000.;
          }
        })
      }
      if (refMaterials2.current) {
        refMaterials2.current.forEach(mat=>{
          if ((mat as any).uniforms) {
            (mat as any).uniforms.time.value = time/1000.;
          }
        })
      }
      
      time += INTERVAL;
    }, INTERVAL)
  }, []);

  // useFrame(() => {
  //   console.log(refCam.current?.position, refCam.current?.rotation);
  // });
// x-1614.62 y116.05 z195.44 
// rot x-0.63 y-1.22 z -0.6
  return (<>
  {/* <fog attach="fog" args={['cyan', 1050, 20000]} /> */}
    <EffectComposer>
      <DotScreen
      blendFunction={THREE.CustomBlending}
        angle={Math.PI * 0.5} // angle of the dot pattern
        scale={(4960/document.documentElement.clientHeight)*0.25} // scale of the dot pattern
      />
    </EffectComposer>
    <directionalLight position={[10, 10, 50]} intensity={4} />
    <directionalLight position={[-10, -10, -10]} intensity={0.5} />
    <ambientLight intensity={2} />
    <Environment preset='park' />
    {/* <PerspectiveCamera ref={refCam} makeDefault position={[0, 0, 500]} far={100000} />
    <OrbitControls /> */}
    <PerspectiveCamera ref={refCam} makeDefault position={[-1614.62,116.05,195.44 ]} rotation={[-0.63,-1.22,-0.6]} far={100000} />
    {/* <Text3D font={"Bangers_Regular.json"} position={[-1050,10,-80]} scale={70} rotation={[0,-Math.PI*.5, 1.5]}>
      PARTY!
      <meshStandardMaterial color={"#AAAAAA"}/>
    </Text3D> */}
    <mesh rotation={[0, Math.PI * .5, 0]} position={[10000, 1650, 0]}>
      <meshStandardMaterial map={landTex} />
      <boxGeometry args={[20000, 3300]} />
    </mesh>
    <mesh rotation={[Math.PI * .5, 0, 0]}>
      <meshStandardMaterial map={waterTex} />
      <boxGeometry args={[20000, 20000]} />
    </mesh>
    <group position={[0, -150, 100]}>
      <primitive object={gltf.scene} position={[-1450,40,130]} rotation={[0.1,-0.1,0]} scale={0.6}/>
      <primitive object={gltfWeirdo2.scene}  position={[-1100,148,0]} rotation={[0,Math.PI-0.4,0]} scale={0.5}/>
    </group>
  </>
  )
}

export default App
