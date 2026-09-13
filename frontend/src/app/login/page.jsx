'use client'
import React from 'react'

const login = () => {
  return (
    <div className="min-h-screen p-4 bg-white flex justify-center items-center gap-2.5">
  <div className="w-full flex flex-col justify-center items-center">
    <div className="w-1/5 p-4 bg-[url('./')] flex flex-col justify-center items-center gap-16">
      <div className="self-stretch text-center justify-start text-white text-2xl font-bold font-['Merriweather']">login form</div>
      <div className="self-stretch flex flex-col justify-center items-center gap-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-4">
          <div className="self-stretch h-14 flex flex-col justify-start items-start gap-1">
            <div className="self-stretch justify-start text-white text-base font-normal font-['Merriweather']">Password</div>
            <div className="self-stretch px-2 py-1 rounded-lg outline outline-1 outline-offset-[-1px] outline-white flex justify-start items-center gap-2.5">
              <div className="text-center justify-start text-white text-base font-normal font-['Merriweather']">Password</div>
            </div>
          </div>
          <div className="self-stretch h-14 flex flex-col justify-start items-start gap-1">
            <div className="self-stretch justify-start text-white text-base font-normal font-['Merriweather']">Email</div>
            <div className="self-stretch px-2 py-1 rounded-lg outline outline-1 outline-offset-[-1px] outline-white flex justify-start items-center gap-2.5">
              <div className="text-center justify-start text-white text-base font-normal font-['Merriweather']">Ram@gamil.com</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col justify-center items-center gap-2.5">
          <div className="px-6 py-2 bg-teal-700 rounded-lg flex justify-center items-center gap-2.5">
            <div className="justify-start text-white text-base font-semibold font-['Merriweather']">login</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
    
  )
}

export default login;