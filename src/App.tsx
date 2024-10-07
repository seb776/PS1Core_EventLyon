import { useRef, useState } from 'react'
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
  const gltfFish = useLoader(GLTFLoader, '/3D/japanese_koi_fish_in_psxps1_style/scene.gltf')
  const gltfCat = useLoader(GLTFLoader, '/3D/cat_ps1_low_poly_rigged/scene.gltf')
  const waterTex = useLoader(TextureLoader, 'Water.jpg')
  const landTex = useLoader(TextureLoader, 'Landscape.jpg')
  const rep = 15;
  waterTex.repeat = new THREE.Vector2(rep, rep)
  waterTex.wrapS = waterTex.wrapT = THREE.RepeatWrapping;
  const refCam = useRef<THREE.PerspectiveCamera>(null);
  useFrame(() => {
    console.log(refCam.current?.position, refCam.current?.rotation);
  });
// x-1614.62 y116.05 z195.44 
// rot x-0.63 y-1.22 z -0.6
  return (<>
    <EffectComposer>
      <DotScreen
        angle={Math.PI * 0.5} // angle of the dot pattern
        scale={0.5} // scale of the dot pattern
      />
    </EffectComposer>
    <directionalLight position={[10, 10, 50]} intensity={4} />
    <directionalLight position={[-10, -10, -10]} intensity={0.5} />
    <ambientLight intensity={2} />
    <Environment preset='park' />
    {/* <PerspectiveCamera ref={refCam} makeDefault position={[0, 0, 500]} far={100000} />
    <OrbitControls /> */}
    <PerspectiveCamera ref={refCam} makeDefault position={[-1614.62,116.05,195.44 ]} rotation={[-0.63,-1.22,-0.6]} far={100000} />
    <Text3D font={"Bangers_Regular.json"} position={[-450,150,-520]} scale={150} rotation={[0,-Math.PI*.5, 0]}>
      PARTY!
      <meshNormalMaterial />
    </Text3D>
    <mesh rotation={[0, Math.PI * .5, 0]} position={[10000, 1650, 0]}>
      <meshStandardMaterial map={landTex} />
      <boxGeometry args={[20000, 3300]} />
    </mesh>
    <mesh rotation={[Math.PI * .5, 0, 0]}>
      <meshStandardMaterial map={waterTex} />
      <boxGeometry args={[20000, 20000]} />
    </mesh>
    <group position={[0, -150, 100]}>
      <primitive object={gltf.scene} position={[-250,0,150]} scale={1.2}/>
      <group scale={50} position={[-1000,250,-200]} rotation={[0,0,0.2]}>
      <primitive object={gltfFish.scene}/>
      <primitive object={gltfCat.scene} scale={0.5} position={[-9.2,-0.8,5]} rotation={[-0.6,-0.7,0]}/>
      </group>
    </group>
  </>
  )
}

export default App
