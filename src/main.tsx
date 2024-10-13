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
        <div className='text-white text-center' style={{fontSize: '2vh', fontWeight: 'bold'}}>
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
        <div className='uppercase font-bold  border-solid bg-black px-[0.5vh] text-white border-[0.2vh] border-black' style={{fontSize: "2vh", fontFamily: 'Roboto'}}>
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
        <div className='uppercase font-bold  border-solid bg-black px-[0.5vh] text-white border-[0.2vh] border-black' style={{fontSize: "2vh", fontFamily: 'Roboto'}}>
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
      <div className='absolute flex flex-col left-[2vw] top-[16vh] stroke-black stroke-2' style={{ transform: 'rotate(-5deg)'}}>
        <div className='' style={{fontSize: '12vh', fontWeight: 'bold', color: '#FF007F',
        WebkitTextStrokeWidth: "0vh", WebkitTextStrokeColor: "black", fontFamily: 'TypefessesClairObscure', filter: 'drop-shadow(0.5vh 0.5vh 0 #fff)'}}>
        Kate NV 
        </div>
        <div className='text-white absolute left-[5vw] top-[15vh]' style={{letterSpacing: '0.2vw',fontSize: '3vh', fontWeight: 'bold', width: '45vw',   
        WebkitTextStrokeWidth: "0.0vh", WebkitTextStrokeColor: "black", fontFamily: 'Bangers', filter: 'drop-shadow(0.25vh 0.25vh 0 #FF007F)'}}>    
        pop étoile filante, electronica glitchée 
        </div>
        <div className='absolute top-[15vh] right-[5vw] ' style={{ letterSpacing: '0.1vw', color: 'white', fontSize: '3vh', fontWeight: 'bold',   
        WebkitTextStrokeWidth: "0.0vh", WebkitTextStrokeColor: "white", fontFamily: 'Bangers', filter: 'drop-shadow(0.25vh 0.25vh 0 #FF007F)'}}>     
        RU/DE
        </div>
      </div>
{/* Lametia */}
      <div className='absolute flex flex-col left-[22vw] top-[42vh] stroke-black stroke-2'>
        <div className='' style={{color: 'rgb(255, 0, 127)',fontSize: '4.5vh', fontWeight: 'bold', filter: 'drop-shadow(0.25vh 0.25vh 0 #fff)',   
        WebkitTextStrokeWidth: "0.1vh", WebkitTextStrokeColor: "white", fontFamily: 'Typefesses'}}>
        Lametia 
        </div>
        <div className='text-white ' style={{letterSpacing: '0.2vw',fontSize: '2vh', fontWeight: 'bold',   
        WebkitTextStrokeWidth: "0.0vh", WebkitTextStrokeColor: "black", fontFamily: 'Bangers', filter: 'drop-shadow(0.25vh 0.25vh 0 #FF007F)'}}>    
        jazz cosmique et psychédélique
        </div>
        <div className='absolute top-[3vh] right-[-5vw]' style={{letterSpacing: '0.1vw',color: 'white', fontSize: '3vh', fontWeight: 'bold',   
        WebkitTextStrokeWidth: "0.0vh", WebkitTextStrokeColor: "white", fontFamily: 'Bangers', filter: 'drop-shadow(0.25vh 0.25vh 0 #FF007F)'}}>    
        IT
        </div>
      </div>
      {/* Benjamin Moutte */}
      <div className='absolute flex flex-col left-[20vw] top-[53vh] stroke-black stroke-2'>
      <div className='' style={{color: 'rgb(255, 0, 127)',fontSize: '4.5vh', fontWeight: 'bold', filter: 'drop-shadow(0.25vh 0.25vh 0 #fff)',   
        WebkitTextStrokeWidth: "0.1vh", WebkitTextStrokeColor: "white", fontFamily: 'Typefesses'}}>
        Benjamin Moutte  
        </div>
        <div className='text-white ' style={{letterSpacing: '0.2vw',fontSize: '2vh', fontWeight: 'bold',   
        WebkitTextStrokeWidth: "0.0vh", WebkitTextStrokeColor: "black", fontFamily: 'Bangers', filter: 'drop-shadow(0.25vh 0.25vh 0 #FF007F)'}}>    
        synth pop cheloue
        </div>
        <div className='absolute top-[5vh] right-[2vw] text-white '  style={{letterSpacing: '0.1vw',color: 'white', fontSize: '3vh', fontWeight: 'bold',   
        WebkitTextStrokeWidth: "0.0vh", WebkitTextStrokeColor: "white", fontFamily: 'Bangers', filter: 'drop-shadow(0.25vh 0.25vh 0 #FF007F)'}}>    
        Dijon
        </div>
      </div>

{/* Azurite Sun & The Sulfur Band  */}
      <div className='absolute flex flex-col left-[17vw] top-[65vh] stroke-black stroke-2'>
      <div className='' style={{color: 'rgb(255, 0, 127)',fontSize: '4.5vh', fontWeight: 'bold', filter: 'drop-shadow(0.25vh 0.25vh 0 #fff)',   
        WebkitTextStrokeWidth: "0.1vh", WebkitTextStrokeColor: "white", fontFamily: 'Typefesses'}}>
        Azurite Sun &<br/> The Sulfur Band  
        </div>
        <div className='text-white ' style={{letterSpacing: '0.2vw',fontSize: '2vh', fontWeight: 'bold',   
        WebkitTextStrokeWidth: "0.0vh", WebkitTextStrokeColor: "black", fontFamily: 'Bangers', filter: 'drop-shadow(0.25vh 0.25vh 0 #FF007F)'}}>    
        art déco pop, doom fantasmagorique
        </div>
        <div className='absolute top-[12vh] right-[2vw] text-white '  style={{letterSpacing: '0.1vw',color: 'white', fontSize: '3vh', fontWeight: 'bold',   
        WebkitTextStrokeWidth: "0.0vh", WebkitTextStrokeColor: "white", fontFamily: 'Bangers', filter: 'drop-shadow(0.25vh 0.25vh 0 #FF007F)'}}>    
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
