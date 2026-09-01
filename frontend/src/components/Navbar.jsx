import React from 'react'
import {CircleUserRound,ShoppingCart} from 'lucide-react'

const navbar = () => {
  return (
<header className="flex items-center px-4 py-3.5">
    <div className="w-full flex flex-row justify-between items-center flex-wrap">
      <div className="flex-1 flex justify-start ">
        <img className="h-32 w-32 object-contain" src="/Gemini_Generated_Image_e2nvm6e2nvm6e2nv.png"/>
        </div>
        {/* navagation link */}
      <div className="flex-1 flex items-center gap-4 lg:gap-10 justify-center text-teal-800 text-lg font-semibold font-['Lora']">
        <a className="hover:underline" href="#">home</a>
        <a className="hover:underline" href="">product</a>
        <a className="hover:underline" href="">about</a>
      </div>
      {/* button section */}
      <div className="flex-1 flex items-center justify-end gap-2 md:gap-3">
      {/* signup button */}
        <div className="flex flex-row items-center justify-center gap-1 rounded-lg bg-teal-800 text-white font-semibold px-2.5 py-2.5 border-2 border-transparent hover:cursor-pointer hover:borde-2 hover:border-white hover:ring-teal-800 hover:ring-2">
        <CircleUserRound/>
        <a href="#">Signup</a>
        </div>
        {/* login button */}
        <div className="flex flex-row items-center justify-center gap-1 rounded-lg bg-teal-800 text-white font-semibold px-2.5 py-2.5 border-2 border-transparent hover:cursor-pointer hover:borde-2 hover:border-white hover:ring-teal-800 hover:ring-2">
        <CircleUserRound/>
        <a href="#">Login</a>
        </div>
        {/* cart */}
        <div className="flex flex-row items-center justify-center gap-1 rounded-lg bg-teal-800 text-white font-semibold px-2.5 py-2.5 border-2 border-transparent hover:cursor-pointer hover:borde-2 hover:border-white hover:ring-teal-800 hover:ring-2">
        <ShoppingCart/>
        <a href="#"></a>
        </div>
      </div>
    </div>
</header>
   
  

  )
}

export default navbar