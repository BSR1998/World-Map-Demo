import React, { useEffect, useState } from 'react'
import blueFlagBtn from '../assets/Blue flag btn.png'
import blueSettingbtn from '../assets/Setting button.png'
import blueQueBtn from '../assets/Blue question button.png'
import footerHealthBar from '../assets/Footer Health bar.png'
import eclipseAvatar from '../assets/Eclipse avatar.png'
import rectangleAvatar from '../assets/Rectangle avatar.png'
import hexaAvatar from '../assets/Hexagone avatar.png'
import clock from '../assets/Clock.png'


function AvtarRight() {

    const[seconds,setSecondss] = useState(0)
    const[minutes,setMinute] = useState(0)

    useEffect(()=>{
       let timer =  setInterval(()=>{

            if(seconds < 60)
            {

                setSecondss( seconds+1)
            }
            else{
                setMinute(minutes+1)
                setSecondss(0)
            }
        },1000)   
       

        return ()=> clearInterval(timer)
    },[seconds,minutes])
 
    
  return (
    <>
        <div className=" left-41px  top-[72%] h-6 w-6  absolute ">
                     <img src={blueFlagBtn} alt="flag btn" />
          </div>
          <div className=" left-41px  top-[80.5%] h-6 w-6  absolute ">
                  <img src={blueSettingbtn} alt="setting btn" />
          </div>
          <div className=" left-41px  top-[89.5%] h-6 w-6  absolute ">
                  <img src={blueQueBtn} alt="question btn"/>
          </div>
          <div className="absolute h-36 w-36 mt-27.75rem"> 
            <img src={footerHealthBar} alt="footer img" / >
          </div>
          <div className=" absolute h-19px w-19px ml-738px -mt-171px">
                <img src={clock} alt="clock"/>
          </div>
          <div className=' absolute h-1px w-1px ml-738px -mt-135px'>
                <p className='text-white text-sm'>{minutes}:{seconds}</p>
          </div>
          <div className="  absolute h-10 w-10 ml-836px -mt-151px"> 
            <img src={eclipseAvatar} alt="avatar img" / >
          </div>
          <div className="  absolute h-12 w-12 ml-836px -mt-6">
          <img src={rectangleAvatar} alt="avatar img" / >
          </div>
          <div className="absolute h-11 w-11 ml-836px mt-24">
          <img src={hexaAvatar} alt="avatar img" / >
          </div>

    </>
  )
}

export default AvtarRight