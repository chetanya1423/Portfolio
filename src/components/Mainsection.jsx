import React, { useEffect } from 'react'
import photo from '../Img/WhatsApp Image 2023-11-24 at 10.54.48 PM.jpeg'
import Typed from "react-typed";
import '../CSS/Mainsection.css'
import { Link } from 'react-router-dom';

export const Mainsection = () => {


  return (
    <div  id='home' className=' w-full flex md:flex-row flex-col p-[2rem] justify-center items-center gap-8  mt-10'>
      <div className=' sm:max-w-max w-[100%] flex justify-center items-center '>
        <img src={photo}
          className='sm:w-[300px] w-full shadow-2xl shadow-cyan-500/50 rounded-xl'
        />
      </div>
      <div className='md:w-[45%] w-full  flex flex-col gap-9'>
        <div className=' flex flex-col gap-3 justify-center items-center'>
          <h1 className='text-white sm:text-3xl text-2xl text-center font-bold font-custom leading-[2rem]'>Hii, My Name is <span className=' animated-running-border'>Chetanya Pathak</span> </h1>
          <h1 className='text-white sm:text-2xl text-xl text-center font-bold font-custom leading-[2rem]'>I am a <Typed className="animated-running-text"
            strings={["Web Developer.", "Coder."]}
            typeSpeed={75}
            backSpeed={50}
            loop={true}
          /></h1>
        </div>
        <div>
          <p className='text-white font-custom text-center leading-[2rem]'>
            I am learning web development and here is my portfolio website all my skill that i learnt till now in this field.
          </p>
        </div>
        <div className='w-full flex justify-center items-center'>
       <Link to='/'>
       {/* <button className='border-2 p-2 rounded-lg font-custom text-white hover:scale-[1.1] hover:bg-sky-500'>
            About me
          </button> */}
          <button className='check'></button>
       </Link>
        </div>
      </div>
    </div>
  )
}
