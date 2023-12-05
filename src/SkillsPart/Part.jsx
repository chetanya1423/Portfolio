import React, { useEffect, useState } from 'react'
import '../CSS/Part.css'

export const Part = ({text,percent}) => {



const [count,setCount] = useState(0);
let sum =0;

useEffect(()=>{
const intervalId = setInterval(()=>{
    if(sum<percent){
        sum++;
        setCount(sum)
    }

},20)
},[])
  


    return (
        <div className='container gap-4'>
            <div className='circular-progress '
                style={
                    {
                        background: `conic-gradient(rgb(134, 209, 238) ${count*3.6}deg, #ededed 0deg)`
                    }
                }
            >
                <span className='progress-value text-xl text-white font-bold font-custom'>
                {count}%
                
                </span>
            </div>
            <p className='sm:text-xl text-lg text-white font-bold font-custom'>{text}</p>
        </div>
    )
}
