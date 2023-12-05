import React, { useEffect, useState } from 'react'
import "../CSS/ContactUs.css"
import axios from 'axios';
import toast from 'react-hot-toast';


export const ContactUs = () => {
  const [form, setForm] = useState({
    fullName: "",
    email:"",
    mobileNo:"",
    comment:"",

  });


//   useEffect(()=>{
// console.log(form)
//   },[])

  const handleChange = (e) => {
    setForm((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value
    }))
  }




  const handleSubmit = async(e) => {
    e.preventDefault()
   
    const emailData = {
      ...form,

    }

    try {
    
let fullName = form.fullName
let email = form.email
let mobileNo = form.mobileNo
let comment = form.comment
      await axios.post(`${process.env.REACT_APP_BASE_URL}`, {
      fullName,
      email,
      mobileNo,
      comment
      });
     setForm({  
      fullName: "",
     email:"",
     mobileNo:"",
     comment:""
    })
      toast.success('Message Successfully Send')
      console.log('Item added successfully');
    } catch (error) {
      console.error('Error adding item:', error);
    }
 
  }

  return (
    <div id='contactus' className=' w-full flex flex-col justify-center items-center mt-[4rem] mb-[4rem]'>

      {/* Biography heading */}
      <div className='max-w-max flex flex-col justify-center items-center   p-7'>
        <h1 className='text-white font-custom sm:text-4xl text-2xl font-bold text-center max-w-max'>CONTACT US</h1>
        <div className='border-2 w-full'></div>
      </div>









      <div className=''>
        <form onSubmit={handleSubmit} className='flex flex-col'>
          <label className='flex flex-col gap-2 p-2'>
           <p className='text-white font-custom'> Full Name :-</p>
            <input
            className='text-black font-custom p-2 rounded-md w-full tracking-[1px] outline-none'
            value={form.fullName}
              placeholder='Enter your full name'
              name='fullName'
              onChange={handleChange}
              type='text'
              required
            />
          </label>





          <label className='flex flex-col gap-2 p-2'>
          <p className='text-white font-custom'> Email:-</p>
            <input
            value={form.email}
              placeholder='Enter Your Email'
              className='text-black  font-custom p-2 rounded-md w-full tracking-[1px] outline-none'
              name='email'
              onChange={handleChange}
              type='email'
              required
            />
          </label>







          <label className='flex flex-col gap-2 p-2'>
         <p className='text-white font-custom'>  Mobile No. :-</p>
            <input
            value={form.mobileNo}
              placeholder='Enter your Mobile No.'
              name='mobileNo'
              className='text-black font-custom p-2 rounded-md w-full tracking-[1px] outline-none'
              onChange={handleChange}
              type='number'

              required
            />
          </label>





          <label className='flex flex-col gap-2 p-2'>
         <p className='text-white font-custom'>Comment :-</p>
          <textarea
        className=' font-custom p-2 rounded-md w-full text-black tracking-[1px] outline-none'
          onChange={handleChange}
          value={form.comment}
          name='comment'
          placeholder="Type your comment here..."
          rows={7}
          cols={40} 
          required
        />
          </label>






          <div className='w-full flex justify-center items-center'>
          <button
          className='sendBtn mt-8'
            type='submit'
            // onClick={()=>toast.success('Message Successfully Send')}
          ></button>
          </div>




          
        </form>
      </div>


      <div>

      </div>
    </div>
  )
}
