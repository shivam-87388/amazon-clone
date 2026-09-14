'use client'
import React from 'react'
import { Eye } from 'lucide-react';

const login = () => {
  return (
 <div className="w-full min-h-screen p-4 bg-white flex justify-center items-center">
  <form className="bg-[url('/rectangle.png')] bg-center bg-no-repeat bg-cover px-10 py-4 flex flex-col justify-center items-center gap-4">
 <h1 className="text-center text-white text-2xl font-bold font-['Merriweather']">login form</h1>

 <div className="flex flex-col items-center justify-center gap-3">
  {/* email section */}
  <div className="w-full flex flex-col items-start justify-center">
    <label htmlFor="user-email" className="text-white text-base font-normal font-['Merriweather'] px-1">Email</label>
    <input type="email" id='user-email' placeholder="email" className="w-full focus:ring-2 focus:ring-blue-500 text-white border-2 outline-hidden border-white px-2 py-1 rounded-md"/>
  </div>
  {/* password section */}
  <div className="w-full flex flex-col ">
    <label htmlFor="user-password" className="text-white text-base font-normal font-['Merriweather'] px-1">password</label>
    <div className="w-full border-2 border-white flex flex-row items-center rounded-md px-2 py-1 focus-within:ring-2 focus-within:ring-blue-500 gap-1">
      <input type='password' id="user-password" placeholder="password" className="text-white outline-hidden"/>
      <Eye color='white'/>

      </div> 

  </div>

 


 </div>
 <button type="submit" className=" py-2.5 px-12 text-center text-base font-semibold font-['Merriweather'] bg-teal-800 text-white rounded-md">login</button>
  </form>
 </div>

    
  )
}

export default login;