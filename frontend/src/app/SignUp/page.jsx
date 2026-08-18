'use client'
import React, { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react';
import { useFormik } from 'formik';
import * as yup from 'yup';

const createAccount = () => {
  const [showpassword, setShowpassword] = useState(false);
  const [hidepassword, setHidepassword] = useState(false);
  const [data,setData] = useState();
  const [user,setUser] = useState([]);
  const handleClick = ()=>{
   setShowpassword(!showpassword);
  }
  const handleShow = ()=>{
    setHidepassword(!hidepassword);
  }
  
  const CreateaccountSchema = yup.object().shape({
  
  fullName: yup.string().required( "name is required"),
  email: yup.string().email().required("email is required"),
  password: yup.string().min("minimun 8 character").required("password is required"),
  confirm_passwrod: yup.string().min(8,"minimun 8 character").required("password is required"),
});

   const createAccountForm = useFormik({
     initialValues: {
       fullName: "",
       email:"",
       password:"",
       confirmpassword:"",
     },
     onchange:()=>{
console.log()
     },
    
    onSubmit:(values) => {
      console.log(values);

    }, 
      
     
     
   });

 

  return (
    <div className="min-h-screen bg-white flex justify-center items-center">
      <div style={{ backgroundImage: "url('/rectangle.png')" }} className=" bg-cover bg-no-repeat bg-center">
      <form onSubmit={createAccountForm.handleSubmit} className="flex flex-col items-center justify-center px-12 py-12">
        <h1 className="text-4xl font-bold font-['Lora'] text-white" >Create Account</h1>
        <div className="flex flex-col w-full px-2 py-4 gap-1">
          {/* fullname field */}
          <div className="flex flex-col text-white font-['Lora'] text-lg">
          <label htmlFor="fullName" className=" font-bold">Full Name</label>
          <input type="text" id="fullName" name="user_name"required onChange={createAccountForm.handleChange} value={createAccountForm.values.fullName} className="px-2.5 py-1 border-2 border-white rounded-md focus:outline-none focus:ring-1 focus:ring-white focus:border-2 focus:border-black"></input>
          </div>
          
          {/* email field */}
          <div className="flex flex-col text-white font-['Lora'] text-lg">
          <label htmlFor="userEmail" className="font-bold ">Email</label>
          <input type="email" id="userEmail" name="email_address" required  onChange={createAccountForm.handleChange} value={createAccountForm.values.email} className="px-2.5 py-1 border-2 border-white rounded-md focus:outline-none focus:ring-1 focus:ring-white focus:border-2 focus:border-black"></input>
          </div>
          
          {/* password field */}
          <div className="flex flex-col text-white font-['Lora'] text-lg">
          <label htmlFor="password" className=" font-bold">Password</label>
          <div className="relative flex items-center">
          <input type={(showpassword) ? "text":"password"} id="password" name="user_password" required  onChange={createAccountForm.handleChange} value={createAccountForm.values.password} className="px-2.5 py-1 border-2 border-white rounded-md focus:outline-none focus:ring-1 focus:ring-white focus:border-2 focus:border-black"></input>
           <button onClick={handleClick} className=" absolute right-2 cursor-pointer">{(showpassword) ?<Eye/>:<EyeOff />}</button>
          </div>
          </div>
         
          {/* confirm password */}
          <div className="flex flex-col text-white font-['Lora'] text-lg">
          <label htmlFor="password" className=" font-bold ">Confirm Password</label>
          <div className="relative flex items-center">
           <input type={(hidepassword) ? "text":"password"} id="confirmpassword" name="user_password" required  onChange={createAccountForm.handleChange} value={createAccountForm.values.confirmpassword} className="px-2.5 py-1 border-2 border-white rounded-md focus:outline-none focus:ring-1 focus:ring-white focus:border-2 focus:border-black"></input>
           <button onClick={handleShow} className=" absolute right-2 cursor-pointer ">{(hidepassword) ?<Eye/>:<EyeOff/>}</button>
          </div>
          </div>
          
          
        </div>
        {/* button */}
        <button type="submit" className="w-full border-2 border-transparent hover:cursor-pointer hover:bg-teal-800 py-1.5 bg-teal-600 text-2xl font-semibold text-white rounded-md hover:ring-1 hover:ring-teal-800 hover:border-2 hover:border-white">Create Account</button>
        
      </form>
      </div>
    </div>
    
  )
}

export default createAccount;