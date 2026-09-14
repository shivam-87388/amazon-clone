'use client'
import React from 'react'

const login = () => {
  return (
 <div className="w-full h-screen p-4 bg-white flex justify-center items-center">
  <form className="bg-[url('/rectangle.png')] bg-center bg-no-repeat bg-cover p-4 flex flex-col justify-center items-center gap-2.5">
 <h1 className="text-center text-white text-2xl font-bold font-['Merriweather']">login form</h1>

 <div className=" w-full flex flex-col items-center justify-center">
  {/* email section */}
  <div className="flex flex-col">
    <label>email</label>
    <input/>
  </div>
 


 </div>
 
  </form>
 </div>

    
  )
}

export default login;