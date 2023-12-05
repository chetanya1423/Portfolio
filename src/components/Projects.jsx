import React, { useState } from 'react'
import { FaChevronLeft } from "react-icons/fa";
import { datas } from '../data';
import { Card } from '../Card/Card';
import { useEffect } from 'react';
import { FaChevronRight } from "react-icons/fa";


export const Projects = () => {
  // const [project,setProject] = useState(datas[0])
  let [currentImageIndex, setCurrentImageIndex] = useState(0);
  let [manual, setManual] = useState(0)

  // right button pe click nhi kiya
  const [rightShift,setRightShift] = useState(false)


  // left button pe click nhi kiya
  const [leftShift,setLeftShift] = useState(false)




  useEffect(() => {



    // currentImageIndex ki value ya to 0 ya usse bdi ho ar sath rightShift waala button ki value agr true ho tb ye condition kaam kregi
    if (currentImageIndex >= 0 && rightShift===true) {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % datas.length)


  
    
    }

    // left button ki value true hogi to ye call krega
    else if(leftShift){


      // agr currentImageIndex ki value 0 h tb ye condition kaam kregi
     if(currentImageIndex===0){
      // currentImageIndex ki valuse last waali fix krdo
      setCurrentImageIndex(datas.length-1)
      
     }
     else{
      setCurrentImageIndex((prevIndex) => (prevIndex - 1) % datas.length)
     }
    }

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % datas.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [manual]);





function nextProject(){
  // right button pe click ho gya
  setRightShift(true)


  // useEffect ko call krne ke liye value increase krdi
  setManual(manual + 1)



}
function prevProject(){
  // right button ki valuse false krte hue chl rhe h
setRightShift(false)

// Left button pe click kiya
setLeftShift(true)

setManual(manual-1)
}


  return (
    <div id='projects' className='w-full mt-[7rem] flex justify-center items-center flex-col mb-[4rem]'>

      <div className='max-w-max'>
        <h1 className='text-white font-bold font-custom text:text-4xl text-2xl text-center'>PROJECTS</h1>
        <div className='border-2 w-full'></div>
      </div>




      <div className='w-full flex justify-center items-center mt-[2rem] relative'>
        {/* Left waala button */}
        <div className=' absolute left-0 border bg-black opacity-60 z-10 hover:opacity-100 transition-all duration-500 hover:scale-[1.1]'>
          <FaChevronLeft className='text-white text-[60px]' 
          onClick={prevProject}
          />
        </div>



        <div className='w-full flex justify-center items-center'>
          {
            <Card project={datas[currentImageIndex]} />
          }
        </div>
        <div className=' absolute right-0 border bg-black opacity-60 z-10 hover:opacity-100 transition-all duration-1000 hover:scale-[1.1]'>
          <FaChevronRight className='text-white text-[60px]'
            onClick={nextProject }
          />
        </div>
      </div>
    </div>
  )
}
