import React from 'react'
import { SiGeeksforgeeks } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { SiHackerrank } from "react-icons/si";
import { CgMail } from "react-icons/cg";
import '../CSS/Linksection.css'

export const Linksection = () => {
  return (
    <div className='  w-full flex justify-center items-center'>
        <div className='flex sm:gap-[3rem] gap-7 justify-center items-center logo-gap p-6'>
            <a href='https://auth.geeksforgeeks.org/user/chetanya1423'>
            <SiGeeksforgeeks className=' text-sky-300 sm:text-[50px] text-[35px]'/>
            </a>
            <a href='https://www.linkedin.com/in/chetanya-pathak-23aa08263/'>
            <FaLinkedin className=' text-sky-300 sm:text-[50px] text-[35px]'/>
            </a>
            <a href='https://github.com/chetanya1423'>
            <FaGithub  className=' text-sky-300 sm:text-[50px] text-[35px]'/>
            </a>
            <a href='https://www.hackerrank.com/profile/chetanyapathak6'>
            <SiHackerrank   className=' text-sky-300 sm:text-[50px] text-[35px]'/>
            </a>
            <a href='mailto:chetanyapathak6@gmail.com'>
            <CgMail  className=' text-sky-300 sm:text-[50px] text-[35px]'/>
            </a>

            

        </div>
    </div>
  )
}
