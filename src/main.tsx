import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { Canvas } from '@react-three/fiber'

function MainCover() {
  return <div className='absolute w-full h-full flex flex-row'>
      <div className='absolute h-full right-0 w-[10%] bg-white flex flex-col'>
        <div className='h-[31%] w-full bg-black flex flex-col'>
          <div className='w-[70%] aspect-square bg-white' style={{margin: '15px auto'}}>
            <div className='h-full w-full' style={{backgroundImage: 'url(gif-sans-marge.gif)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', backgroundPosition: 'center'}}></div>
          </div>
          <p className='text-white rotate-90 mt-[2.5vh] text-nowrap' style={{fontFamily: 'Playstation', fontSize: '2.7vh', letterSpacing: '0.2vh'}}>Grrrnd Zero</p>
        </div>
        <div className='h-full w-full'>
        <p className='text-black rotate-90 mt-[5vh] text-nowrap' style={{fontFamily: 'Playstation', fontSize: '2.7vh', letterSpacing: '0.2vh'}}>60 av de bohlen 69120 Vaulx en Velin @20h</p>

        </div>
      </div>
      <div className='top-[70vh] right-[5vh] flex justify-center items-center absolute' style={{transform: 'rotate(10deg)', width: '30vh', backgroundImage: 'url(./Stamp.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', aspectRatio: '1.77'}}>
        <div className='text-white text-center' style={{fontSize: '2vh', fontWeight: 'bold'}}>
        vernissage 
        <br/>
        expo
        <br/>
        Jules KB
        </div>
      </div>
  </div>
}
// 282/1031
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className='absolute w-full h-full'>
      <div className='absolute w-full h-full'>

      <Canvas>
        <App />
      </Canvas>
      </div>
      <div className='absolute h-full w-full'>

      <MainCover/>
      </div>
    </div>
  </StrictMode>,
)
