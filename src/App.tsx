import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { Environment, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { DotScreen, EffectComposer } from '@react-three/postprocessing'
import { OutlineDepthBased } from './PostEffectOutline'
import * as THREE from 'three'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js'

function App() {
  const gltf = useLoader(GLTFLoader, '/3D/WeirdMesh/24_09_30_11_11_50_296.gltf')
  const waterTex = useLoader(TextureLoader, 'Water.jpg')
  const rep = 15;
  waterTex.repeat = new THREE.Vector2(rep, rep)
  waterTex.wrapS = waterTex.wrapT = THREE.RepeatWrapping;
  return (
    <div>
      <div className='absolute w-full h-full'>
        <Canvas>
          <EffectComposer>
          <DotScreen
    angle={Math.PI * 0.5} // angle of the dot pattern
    scale={1.0} // scale of the dot pattern
  />         
   </EffectComposer>
        <directionalLight position={[10, 10, 50]} intensity={4} />
        <directionalLight position={[-10, -10, -10]} intensity={0.5} />
        <ambientLight intensity={2} />
        <Environment preset='park'/>
        <PerspectiveCamera makeDefault position={[0, 0, 500]} far={100000}/>
          <OrbitControls />
          <mesh rotation={[Math.PI*.5,0,0]}>
          <meshStandardMaterial map={waterTex}/>
          <boxGeometry args={[10000,10000]}/>
          </mesh>
          <group position={[0, -150, 150]}>
          <primitive object={gltf.scene} />
          </group>
        </Canvas>
      </div>
    </div>
  )
}

export default App
