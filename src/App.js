
import React from "react";
import {   useEffect } from 'react';
import './App.css';
import boarderImage from './assets/borderpng.png'
import worldImg from './assets/World map updated.svg';
import Zoomslider from './components/Zoomslider';
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import AvtarRight from "./components/AvtarRight";

function App() {



  useEffect(() => {
    document.body.style.overflow = 'hidden';
  }, []);


    function onCountrySelect(e)
    {
      console.log("Hello")
        console.log(e.target)
    }

  return (
    <div className="App"  >
      <div className="bg-gradient-to-b from-customBrown to-customDarkBrown h-screen relative flex items-center justify-center "   >
      
          {/* this div use for boarder */}
          <div className=' h-[90%] w-[90%] absolute ' > 
                <img src={boarderImage} alt='border is not loaded' className=' top-50 left-50 h-[100%] w-[100%]'>
                </img>
          </div>
          <TransformWrapper initialScale={1}
                initialPositionX={0}
                initialPositionY={0} >
               {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
                      <React.Fragment >
                        
                        {/* Zoom in zoom out slider */}
                        <div className="left-11 top-[33%] h-[90%]  absolute">
                        
                          <Zoomslider zoomInFun = {()=>{zoomIn()}} zoomOutFun = {()=>{zoomOut()}}/>
                        </div>
                        <TransformComponent  >
                          <img src={worldImg}  onClick={onCountrySelect} className="h-96"  alt="test" />

                        </TransformComponent>
                      </React.Fragment>
                )}
          </TransformWrapper>
        
          {/* Component to show icons on R.H.S */}
          <AvtarRight />

      </div>
     
    </div>
  );
}

export default App;
