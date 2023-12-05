import React from 'react'
import { Part } from '../SkillsPart/Part'

export const Skills = () => {

    return (
        <div id='skills' className='flex flex-col justify-center items-center mt-[4rem] gap-[4rem]'>


            {/* Skills heading section */}

            <div className='max-w-max'>
                <h1 className='text-white font-bold text-center  font-custom text-2xl sm:text-4xl'>SKILLS</h1>
                <div className='border-2 w-full'></div>
            </div>




            <div className=' bg-[#1e2125] flex sm:flex-row flex-col  gap-4'>



                <div className='flex flex-col items-center  gap-9 relative top-0'>
                    <div className='max-w-max flex justify-center items-center '>
                        <h1 className='sm:text-4xl text-center underline text-xl text-white font-bold font-custom'>LAUNGUAGES</h1>
                    </div>
                    <div className='sm:flex flex-col grid grid-cols-2 sm:gap-10 gap-4'>
                        <Part text={"C"} percent={75} />
                        <Part text={"C++"} percent={75} />
                        <Part text={"JAVA"} percent={80} />
                    </div>
                </div>







                <div className='flex flex-col justify-center items-center gap-9'>
                    <div className='max-w-max flex justify-center items-center'>
                        <h1 className='sm:text-4xl text-center underline text-xl text-white font-bold font-custom'>DEVELOPMENTS</h1>
                    </div>
                    <div className='grid grid-cols-2 sm:gap-10 gap-4'>
                        <Part text={"HTML"} percent={85} />
                        <Part text={"CSS"} percent={82} />
                        <Part text={"JAVASCRIPT"} percent={78} />
                        <Part text={"REACT JS"} percent={85} />
                        <Part text={"NODE JS"} percent={60} />
                        <Part text={"EXPRESS JS"} percent={65} />
                        <Part text={"MONGODB"} percent={62} />
                    </div>
                </div>

            </div>
        </div>
    )
}
