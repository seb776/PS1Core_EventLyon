import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas, useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { DotScreen, EffectComposer } from '@react-three/postprocessing'
import { OutlineDepthBased } from './PostEffectOutline'
import * as THREE from 'three'

function App() {
  const gltf = useLoader(GLTFLoader, '/3D/WeirdMesh/24_09_30_11_11_50_296.gltf')

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
        <directionalLight position={[-10, -10, -10]} intensity={1} />
        <ambientLight intensity={1} />
        <PerspectiveCamera makeDefault position={[0, 0, 500]} />
          <OrbitControls />
          <group position={[0, -150, 150]}>
          <primitive object={gltf.scene} />
          </group>
        </Canvas>
      </div>
    </div>
  )
}

export default App
