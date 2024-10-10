import React from 'react'
import Blueline from "../assets/Blue line.png"
import Plussign from "../assets/Plus.png"
import Minussign from "../assets/Minus.png"
import Eclipse from "../assets/Blue Circle.png"
import EclipseBorder from "../assets/circle border.png"

function Zoomslider({zoomInFun,zoomOutFun}) {


  return (
     <div className='flex relative flex-col z-10'>
    
        <div className='relative -left-0.5 w-6 z-10 -top-0.5' onClick={zoomInFun}>
                <img src={Eclipse} className=' absolute '   alt=' eclipse '/>
                <img src={EclipseBorder} className='w-32 absolute'  alt=' eclipse border'/>       
                <img src={Plussign} className=' absolute left-1.5 top-1.5 w-3 h-3'  alt='Plus sign'></img>
        </div>

         <img src={Blueline}  className='relative left-1 w-3 h-20 z-9' alt='line'/>
        
        <div className='relative -left-0.5 w-6 z-10 -top-0.5' onClick={zoomOutFun}>
            <img src={Eclipse} className='absolute' alt=" eclipse"/>
            <img src={EclipseBorder} className=' w-32 absolute' alt=' eclipse border'/>
            <img src={Minussign} className='absolute left-1.5 top-2 w-3 h-2' alt='Minus sign'></img>
        </div>
     </div>
  )
}

export default Zoomslider