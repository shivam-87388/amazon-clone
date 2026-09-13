'use client'
import React from 'react'

const login = () => {
  return (
    <div className="flex items-center justify-center">
    <div  className="flex flex-col bg-[url('/rectangle.png')] object-fill w-103.75 h-135.25 bg-cover bg-no-repeat items-center justify-center bg-center">
    <h1 className="text-center text-white text-2xl font-bold font-['Merriweather']">Login form</h1>
    
    <div className="flex flex-col gap-0.5">
     <label htmlFor="email" className="text-white text-base font-normal font-['Merriweather']">email</label>
    <input className="w-64 px-2 py-1 rounded-md border-2 border-white" />
    </div>
    
    <label>password</label>
    <input />
    </div>
  
    </div>
    
  )
}

export default login;