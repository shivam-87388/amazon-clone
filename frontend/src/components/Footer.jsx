
import React from 'react'

const Footer = () => {
  return (
   <footer className="flex px-6 py-14 bg-slate-900 items-center">
    <div className="w-full flex flex-row items-start justify-between gap-4">
        <div className="flex justify-center flex-1 ">
         <img className="w-52 h-52 " src="/Gemini_Generated_Image_e2nvm6e2nvm6e2nv.png" alt="brandimage"/>
        </div>
         {/* navagation link */}
  <nav className="flex-1 flex flex-col justify-center items-center gap-3">
    <h3 className="flex justify-center text-white text-xl font-bold font-['Lora']">Navigation Link</h3>
    <ul className="flex flex-col justify-center items-center gap-3.5  text-white text-xl font-normal font-['Lora']">
      <li><a href='/'>home</a></li>
      <li><a href='/'>product</a></li>
      <li><a href='/'>about</a></li>
      <li><a href='/'>cart</a></li>
    </ul>
  </nav>
  {/* social links */}
   <nav className="flex-1 flex flex-col items-center justify-center gap-3">
    <h3 className="flex justify-center text-white text-xl font-bold font-['Lora']">Social Link</h3>
    <ul className="flex flex-col justify-center items-center gap-3.5  text-white text-xl font-normal font-['Lora']">
      <li><a href='/'>facebook</a></li>
      <li><a href='/'>instagram</a></li>
      <li><a href='/'>youtube</a></li>
    </ul>
  </nav>
  {/* subscribe */}
  <div className="flex-1 flex flex-col gap-2 justify-center">
    <h4 className='flex justify-start  text-md text-white font-semibold'>subscribe</h4>
    <div className="flex-1 flex flex-row gap-3.5 justify-center flex-wrap">
    <input placeholder="email" className="flex-1 text-white text-lg ring-white ring-2 py-2.5 px-1.5 rounded-md"></input>
    <button className="px-5 py-1 bg-orange-400 text-white font-semibold text-lg rounded-md hover:bg-teal-500 hover:cursor-pointer border-2 border-transparent hover:border-2 hover:border-white hover:ring-2 hover:ring-teal-500">submit</button>
    </div>
  </div>
    </div>
 
 
</footer>
  )
}

export default Footer