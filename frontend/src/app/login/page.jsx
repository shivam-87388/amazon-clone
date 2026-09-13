'use client'
import React from 'react'

const login = () => {
  return (
    <div className="flex items-center justify-center">
    <div className=" bg-[url('/rectangle.png')] object-fill w-103.75 h-135.25 bg-cover bg-no-repeat">
    <form className="flex flex-col items-center justify-center gap-2.5 ">
       <h1 className="text-center text-white text-2xl font-bold font-['Merriweather']">Login form</h1>
     {/* email section */}
     <div className="flex flex-col gap-0.5">
     <label htmlFor="email" className="text-white text-[16px] font-normal font-['Merriweather']">email</label>
    <input id="email" placeholder="sinchanNohara@gmail.com" className=" text-white text-[16px] w-64 px-2 py-1 rounded-md border-2 border-white" />
    </div>
    {/* password */}
    <div className="flex flex-col gap-0.5">
     <label htmlFor="password" className="text-white text-[16px] font-normal font-['Merriweather']">Password</label>
    <input id="password" placeholder="password" className=" text-white text-[16px] w-64 px-2 py-1 rounded-md border-2 border-white" />
    </div>
    </form>
    <button className="w-32 px-3.5 py-2 bg-teal-800 rounded-lg flex justify-center items-center text-white text-base font-semibold font-['Merriweather']">login
    </button>
    </div>
  
    </div>
    
  )
}

export default login;