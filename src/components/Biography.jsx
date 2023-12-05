import React from 'react'
import '../CSS/Biography.css'
import { Link } from 'react-router-dom'

export const Biography = () => {
  return (
    <div id='biography' className=' w-full flex flex-col justify-center items-center mt-[4rem]'>

        {/* Biography heading */}
        <div className='max-w-max flex flex-col justify-center items-center   p-7'>
            <h1 className='text-white font-custom sm:text-4xl text-2xl font-bold text-center max-w-max'>BIOGRAPHY</h1>
            <div className='border-2 w-full'></div>
        </div>





{/* Paragraph waala div */}
        <div className='flex flex-col gap-7 p-4 mt-[1rem]'>
            <p className='text-white font-custom text-lg text-left'>Self independent, reliable and friendly individual who works hard to achieve his goal.</p>
            <p className='text-white font-custom text-lg text-left'>Adaptable quickly and organized well. Interested in learning the latest web and software technology quickly.</p>
            <p className='text-white font-custom text-lg text-left'>Able to work well in teams as well as individually. My future goal is to become a senior full stack developer.</p>
        </div>








{/* Detail waala section */}
        <div className='flex flex-col mt-[5rem]'>
            <button className='text-white font-custom  p-3 shadow-2xl hover:scale-[1.1] shadow-cyan-500/50 rounded-xl mb-5 namebtn'>Name :- Chetanya Pathak</button>
            <a href='mailto:chetanyapathak6@gmail.com' className=''>
            <button className='text-white font-custom w-full hover:scale-[1.1]  p-3 shadow-2xl shadow-cyan-500/50 rounded-xl mb-5 namebtn'>Email :- chetanyapathak6@gmail.com</button>
            </a>
            <button className='text-white font-custom  p-3 shadow-2xl hover:scale-[1.1] shadow-cyan-500/50 rounded-xl mb-5 namebtn'>Mobile no. :- 9058656092</button>
            <button className='text-white font-custom  p-3 shadow-2xl hover:scale-[1.1] shadow-cyan-500/50 rounded-xl mb-5 namebtn'>Address :- Vill-Beloth, Post-Karas, Distric-Aligarh (U.P.)</button>
            <button className='text-white font-custom  p-3 shadow-2xl hover:scale-[1.1] shadow-cyan-500/50 rounded-xl mb-5 namebtn'>Experience :- Fresher</button>
        </div>












        <div className='mt-[5rem] mb-4 max-w-max flex justify-center items-center'>
        <a href='https://drive.google.com/file/d/1WuoRGrknD4TdwmOw-Ci5C43zcrp2F9jP/view?usp=drive_link'>
        <button className='download hover:scale-[1.1]'></button>
        </a>
        
        
        </div>
    </div>
  )
}
