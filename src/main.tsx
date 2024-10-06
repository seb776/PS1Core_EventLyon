import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Canvas } from '@react-three/fiber'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='absolute w-full h-full'>
      <Canvas>
        <App />
      </Canvas>
    </div>
  </StrictMode>,
)
