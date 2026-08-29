
import React from 'react'

const Footer = () => {
  return (
   <footer className="flex px-6 py-14 bg-slate-900  justify-around items-start flex-wrap content-start">
  <img className="w-52 h-56" src="/Gemini_Generated_Image_e2nvm6e2nvm6e2nv.png"/>
  <nav className="flex flex-col justify-center items-center gap-3">
    <h3 className="felx justify-start text-white text-xl font-bold font-['Lora']">Navigation Link</h3>
    <ul className="flex flex-col justify-center items-center gap-3.5  text-white text-xl font-normal font-['Lora']">
      <li><a href='/'>home</a></li>
      <li><a href='/'>product</a></li>
      <li><a href='/'>about</a></li>
      <li><a href='/'>cart</a></li>
    </ul>
  </nav>
  {/* social links */}
   <nav className="flex flex-col justify-center items-center gap-3">
    <h3 className="felx justify-start text-white text-xl font-bold font-['Lora']">Navigation Link</h3>
    <ul className="flex flex-col justify-center items-center gap-3.5  text-white text-xl font-normal font-['Lora']">
      <li><a href='/'>home</a></li>
      <li><a href='/'>product</a></li>
      <li><a href='/'>about</a></li>
      <li><a href='/'>cart</a></li>
    </ul>
  </nav>
  <div className="h-24 flex flex-col justify-between items-center">
    <div className="self-stretch px-2.5 py-1 flex justify-start items-center gap-2.5">
      <div className="justify-start text-white text-xl font-bold font-['Lora']">Subscribe</div>
    </div>
    <div className="self-stretch flex justify-center items-center gap-3.5 flex-wrap content-center">
      <input className="w-60 h-16 rounded-[10px] border-2 border-white"/>
      <div className="px-6 py-3 bg-orange-400 rounded-[10px] flex justify-center items-center gap-2.5">
        <div className="justify-start text-white text-xl font-bold font-['Lora']">submit</div>
      </div>
    </div>
  </div>
</footer>
  )
}

export default Footer