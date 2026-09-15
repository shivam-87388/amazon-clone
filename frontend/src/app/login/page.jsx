'use client'
import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react';
import { useFormik } from 'formik';
import * as yup from 'yup';


const login = () => {
  // hide show icon
  const [show,setShow] = useState(false);
  const handleClick =()=>{
    setShow(!show);
  };
  
  const loginSchema = yup.object().shape({
  
  user_email: yup.string().email('Invalid email').required('Required'),
  user_password: yup.string().required('Password is required')
    .matches(/[a-z]/, 'lowercase letter is required')
    .matches(/[A-Z]/, 'uppercase letter is required')
    .matches(/[0-9]/, 'number is required')
    .matches(/\W/, 'any special character is required')
    .min(6, '6 characters are required'),
});

   const loginform = useFormik({
     initialValues: {
       user_email: '',
       user_password:''
     },
     onSubmit: async(values) => {
       console.log(values);
     },
     validationSchema: loginSchema
   });
  
  

  return (
 <div className="w-full min-h-screen p-4 bg-white flex justify-center items-center">
  <Toaster
  position="top-center"
  reverseOrder={false}
/>
  <form onSubmit={loginform.handleSubmit} className="bg-[url('/rectangle.png')] bg-center bg-no-repeat bg-cover px-10 py-4 flex flex-col justify-center items-center gap-4">
 <h1 className="text-center text-white text-2xl font-bold font-['Merriweather']">login form</h1>

 <div className="flex flex-col items-center justify-center gap-3">
  {/* email section */}
  <div className="w-full flex flex-col items-start justify-center">
    <label htmlFor="user_email" className="text-white text-base font-normal font-['Merriweather'] px-1">Email</label>
    <input type="email" id='user_email' value={loginform.values.user_email} onChange={loginform.handleChange} placeholder="email" className="font-['Merriweather'] w-full focus:ring-2 focus:ring-blue-500 text-white border-2 outline-hidden border-white px-2 py-1 rounded-md"/>
  </div>
  {/* password section */}
  <div className="w-full flex flex-col ">
    <label htmlFor="user_password" className="text-white text-base font-normal font-['Merriweather'] px-1">Password</label>
    <div className="w-full border-2 border-white flex flex-row items-center rounded-md px-2 py-1 focus-within:ring-2 focus-within:ring-blue-500 gap-1">
      <input value={loginform.values.user_password} onChange={loginform.handleChange} type={(show) ? "text":"password"}  id="user_password" placeholder="password" className="text-white outline-hidden font-['Merriweather']"/>
      <button type="button" className="hover:cursor-pointer" onClick={handleClick}>{(show)? <Eye color='white'/>:<EyeOff color='white'/>}
        </button>
      </div> 
  </div>
 </div>
 <button type="submit" className="py-2.5 px-12 text-center text-base font-semibold font-['Merriweather'] hover:cursor-pointer bg-teal-800 text-white rounded-md">login</button>
  </form>
 </div>

    
  )
}

export default login;