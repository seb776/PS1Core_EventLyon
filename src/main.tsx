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
        <p className='text-black rotate-90 mt-[5vh] text-nowrap' style={{fontFamily: 'Playstation', fontSize: '2.7vh', letterSpacing: '0.2vh'}}>20 ans du Grrrnd Zero</p>

        </div>
      </div>
      <div className='absolute z-50 top-[2vh] left-[40vh] flex justify-center items-center ' style={{transform: 'rotate(5deg)', width: '30vh', backgroundImage: 'url(./Stamp.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', aspectRatio: '1.77', filter: "drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))"}}>
        <div className='text-white text-center' style={{fontSize: '2vh',fontFamily: 'Bangers',letterSpacing: '0.3vw', fontWeight: 'bold'}}>
        vernissage 
        <br/>
        expo
        <br/>
        Jules KB
        </div>
      </div>

      <div className='absolute bottom-[5vh] right-[5vh] flex justify-center items-center ' style={{transform: 'rotate(-10deg)', width: '17vh', aspectRatio: '2.33',filter: "drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.5))" }}>
        <div className='absolute w-full h-full' style={{backgroundImage: 'url(./PriceTag.png)', backgroundSize: 'contain', backgroundRepeat: 'no-repeat', filter: 'brightness(50%) saturate(100%) invert(69%) sepia(13%) saturate(2710%) hue-rotate(162deg) brightness(101%) contrast(94%)'}}></div>
        <div className='absolute  text-center opacity-70 text-gray-900' style={{transform:'rotate(4deg)', filter: 'blur(0.05vh)', fontSize: '2.5vh', fontWeight: 'bold'}}>
        ± €8.00
        </div>
      </div>
      <div className='absolute bottom-[2vh] left-[2vh] flex flex-col bg-white w-[25vh]'>
        <div className='uppercase font-normal  border-solid bg-black px-[0.5vh] text-white border-[0.2vh] border-black' style={{fontSize: "2vh", fontFamily: 'Roboto'}}>
          Informations
        </div>
        <div className='border-solid leading-none border-[0.2vh] border-black px-[0.5vh] py-[0.2vh]' style={{fontSize: "2vh", fontFamily: 'Roboto'}}>
          Ouverture des portes a 20h
        </div>
        <div className='border-solid leading-none border-[0.2vh] border-black px-[0.5vh] py-[0.2vh]' style={{fontSize: "2vh", fontFamily: 'Roboto'}}>
          60 av de bohlen 69120 Vaulx en Velin
        </div>
      </div>

      <div className='absolute bottom-[2vh] left-[29vh] flex flex-col bg-white w-[15vh]'>
        <div className='uppercase font-normal  border-solid bg-black px-[0.5vh] text-white border-[0.2vh] border-black' style={{fontSize: "2vh", fontFamily: 'Roboto'}}>
          Visuels
        </div>
        <div className='border-solid leading-none border-[0.2vh] border-black px-[1vh] py-[0.5vh]' style={{fontSize: "2.5vh", fontFamily: 'Roboto'}}>
        Kaamtar
        <br/>
        lbvp
        <br/>
        z0rg
        </div>
      </div>

{/* Kate NV */}
      <div className='absolute flex flex-col left-[2vw] top-[14.8vh] stroke-black stroke-2' style={{ transform: 'rotate(-5deg)'}}>
        <div className='' style={{fontSize: '18vh', fontWeight: 'bold', color: 'white',
        WebkitTextStrokeWidth: "0.1vh", WebkitTextStrokeColor: "black", fontFamily: 'Bangers', filter: 'drop-shadow(0.5vh 0.5vh 0 black)'}}>
        Kate NV 
        </div>
        <div className='text-black absolute left-[10vw] top-[21vh]' style={{letterSpacing: '0.1vw',fontSize: '3vh', fontWeight: 'bold', width: '45vw',   
        WebkitTextStrokeWidth: "0.1vh", WebkitTextStrokeColor: "white", lineHeight: '4vh', filter: 'drop-shadow(0.25vh 0.25vh 0 white)'}}>    
        pop étoile filante, electronica glitchée 
        </div>
        <div className='absolute top-[15vh] right-[-14vw] ' style={{letterSpacing: '0.3vw',fontSize: '3vh', fontWeight: 'normal',  
        WebkitTextStrokeWidth: "0.1vh", WebkitTextStrokeColor: "white", fontFamily: 'Bangers', filter: 'drop-shadow(0.25vh 0.25vh 0 white)'}}>    
        RU/DE
        </div>
      </div>
{/* Lametia */}
      <div className='absolute flex flex-col left-[23vw] top-[43.5vh] stroke-black stroke-2'>
        <div className='' style={{color: 'white',fontSize: '6vh', fontWeight: 'bold', filter: 'drop-shadow(0.25vh 0.25vh 0 black)',   
        WebkitTextStrokeWidth: "0.1vh", WebkitTextStrokeColor: "black", fontFamily: 'Bangers'}}>
        Lametia 
        </div>
        <div className='absolute text-black top-[7vh] left-[-2vw]' style={{letterSpacing: '0.1vw',fontSize: '3vh', fontWeight: 'bold', width: '85vw',
        WebkitTextStrokeWidth: "0.1vh", WebkitTextStrokeColor: "white", filter: 'drop-shadow(0.25vh 0.25vh 0 white)'}}>    
        jazz cosmique et psychédélique
        </div>
        <div className='absolute top-[2.5vh] right-[-5vw]' style={{letterSpacing: '0.3vw',color: 'black', fontSize: '3vh', fontWeight: 'normal',   
        WebkitTextStrokeWidth: "0.1vh", WebkitTextStrokeColor: "white", fontFamily: 'Bangers', filter: 'drop-shadow(0.25vh 0.25vh 0 white)'}}>    
        IT
        </div>
      </div>
      {/* Benjamin Moutte */}
      <div className='absolute flex flex-col left-[20vw] top-[55vh] stroke-black stroke-2'>
      <div className='' style={{color: 'white',fontSize: '6vh', fontWeight: 'bold', filter: 'drop-shadow(0.25vh 0.25vh 0 black)',   
        WebkitTextStrokeWidth: "0.1vh", WebkitTextStrokeColor: "black", fontFamily: 'Bangers'}}>
        Benjamin Moutte  
        </div>
        <div className='absolute text-black top-[7vh] left-[-5vw]' style={{letterSpacing: '0.1vw',fontSize: '3vh', fontWeight: 'bold',   
        WebkitTextStrokeWidth: "0.1vh", WebkitTextStrokeColor: "white", filter: 'drop-shadow(0.25vh 0.25vh 0 white)'}}>    
        synth pop cheloue
        </div>
        <div className='absolute top-[2.5vh] right-[-11.5vw] text-black '  style={{letterSpacing: '0.3vw',color: 'black', fontSize: '3vh', fontWeight: 'normal',   
        WebkitTextStrokeWidth: "0.1vh", WebkitTextStrokeColor: "white", fontFamily: 'Bangers', filter: 'drop-shadow(0.25vh 0.25vh 0 white)'}}>    
        Dijon
        </div>
      </div>

{/* Azurite Sun & The Sulfur Band  */}
      <div className='absolute flex flex-col left-[17vw] top-[68vh] stroke-black stroke-2'>
      <div className='' style={{color: 'white',fontSize: '6vh', fontWeight: 'bold', filter: 'drop-shadow(0.25vh 0.25vh 0 black)',   
        WebkitTextStrokeWidth: "0.1vh", WebkitTextStrokeColor: "black", fontFamily: 'Bangers', lineHeight: '5.5vh'}}>
        Azurite Sun &<br/> The Sulfur Band  
        </div>
        <div className='absolute top-[11.5vh] left-[-7vw] text-black ' style={{letterSpacing: '0.1vw',fontSize: '3vh', fontWeight: 'bold',   
        WebkitTextStrokeWidth: "0.1vh", WebkitTextStrokeColor: "white", lineHeight: '3vh', width: '80vw', filter: 'drop-shadow(0.25vh 0.25vh 0 white)'}}>    
        art déco pop, doom fantasmagorique
        </div>
        <div className='absolute top-[6vh] right-[-10vw] text-black '  style={{letterSpacing: '0.3vw',color: 'black', fontSize: '3vh', fontWeight: 'normal',   
        WebkitTextStrokeWidth: "0.1vh", WebkitTextStrokeColor: "white", fontFamily: 'Bangers', filter: 'drop-shadow(0.25vh 0.25vh 0 white)'}}>    
        Lyon
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
