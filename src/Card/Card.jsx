import React, { useEffect } from 'react'
import '../CSS/Card.css'
import { TiArrowRight } from "react-icons/ti";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";


export const Card = ({project}) => {
//  console.log(project.name.length)
    
  return (
    <div className=' w-[100%] flex lg:flex-row flex-col lg:gap-2 justify-center items-center py-3 transition-all duration-1000 hover:scale-[1.1]  hover:z-0 overflow-hidden'>

        {/* Image waali div */}
        <div className={`   `}
      
        >
          <img src={project.img}
          className=' rounded-xl'
          />
        </div>



        <div className='lg:w-[30%] md:w-[60%] p-3 flex flex-col justify-center items-center gap-3'>
          <h1 className='text-white font-bold font-custom sm:text-3xl text-xl '>{project.name.length > 10 ? project.name.substring(0,15)+"...." : project.name}</h1>
          <div className=''>
            <p className='text-white font-custom sm:text-lg text-center text-sm   '>{
              project.discription.substring(0,150)+"...."
            }</p>
          </div>
          <a className='rounded-lg' href={project.githubUrl}>
            <p className='text-white text-[50px] hover:scale-[1.1] rounded-lg'><FaGithub /></p>
          </a>
         <a href={project.liveLink}>
         <button className='live gap-3 hover:scale-[1.1]'>
              <p className='text-white font-custom  text-xl z-10'>Explore</p>
              <FaLink className='text-white font-custom  text-xl z-10' />
              </button>
         </a>
           
        
        </div>
    </div>
  )
}
