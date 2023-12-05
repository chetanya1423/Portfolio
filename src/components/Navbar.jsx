import React, { useEffect, useState } from 'react'
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import '../CSS/Navbar.css'

export const Navbar = () => {
    const [isActive,setIsActive] = useState(false);





    useEffect( ()=>{

window.addEventListener("scroll", ()=>{
    setIsActive(false)
})
    },[] )




    // ${isActive ? "" : "md:mt-0 mt-[-31rem]"}
  return (
    <div className={`w-full md:border-none    flex md:flex-row flex-col md:gap-0 gap-9 justify-between items-center z-50 bg-[#1e2125]  fixed top-0 transition-all duration-1000 ${isActive ? "" : "md:mt-0 mt-[-31rem]"} `}>
        <div className='p-3'>
            <h1 className='lg:text-3xl sm:text-xl text-2xl  text-white font-bold name-Head'>CHETANYA PATHAK</h1>
            <div className='w-full border-2'></div>
        </div>
        <div className='flex lg:gap-8 md:gap-3 md:flex-row flex-col nav '>
            <a href='#home'><li className='list-none md:p-3 p-4 font-bold text-white md:text-lg text-2xl nav-li text-center'>Home</li></a>
            <a href='#biography'><li className='list-none md:p-3 p-4 font-bold text-white md:text-lg text-2xl nav-li text-center'>About</li></a>
            <a href='#skills'><li className='list-none md:p-3 p-4 font-bold text-white md:text-lg text-2xl nav-li text-center'>Skills</li></a>
            <a href='#projects'><li className='list-none md:p-3 p-4 font-bold text-white md:text-lg text-2xl nav-li text-center'>Projects</li></a>
            <a href='#contactus'><li className='list-none md:p-3 p-4 font-bold text-white md:text-lg text-2xl nav-li text-center'>Contact us</li></a>
        </div>
        <div className='md:hidden relative  top-[3rem] w-full flex justify-end menu-logo'>
            {
!isActive ? (
    <TiThMenu className='text-white relative  text-[38px]' onClick={()=>setIsActive(!isActive)}/>
) : (
    <RxCross2 className='text-white relative   text-[38px]' onClick={()=>setIsActive(!isActive)}/>
)
            }
       
       
        </div>
    </div>
  )
}
