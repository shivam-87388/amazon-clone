"use client"
import React, { useState } from 'react'
import {CircleUserRound,ShoppingCart, Menu, X} from 'lucide-react'

const navbar = () => {
    const [menu , setmenu] = useState(false);
    const handleClick =()=>{
      setmenu(!menu)

    }
  return (
    <div>
      {/* tablet + desktop navbar */}
<header className="hidden md:flex items-center px-4 py-3.5">
    <div className="w-full flex flex-row justify-between items-center flex-wrap">
      <div className="flex justify-start ">
        <img className="h-32 w-32 object-contain" src="/Gemini_Generated_Image_e2nvm6e2nvm6e2nv.png"/>
        </div>
        {/* navagation link */}
      <div className="flex items-center gap-4 lg:gap-10 justify-center text-teal-800 text-lg font-semibold font-['Lora']">
        <a className="hover:underline" href="#">home</a>
        <a className="hover:underline" href="">product</a>
        <a className="hover:underline" href="">about</a>
      </div>
      {/* button section */}
      <div className="flex items-center justify-end gap-2 md:gap-3">
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

{/* mobile navbar */}
<header className="md:hidden flex flex-row justify-between items-center bg-white m-2">
    <img className="w-24 h-24" src="/Gemini_Generated_Image_e2nvm6e2nvm6e2nv.png" alt='logo'/>
    <div className="relative flex flex-col mr-2.5">
   <button onClick={handleClick} className="bg-teal-800 rounded-md py-2.5 px-2.5 gap-2.5 mb-2">
  {menu?<X color="#ffff" />:<Menu color="#ffff" />}
   </button>
   {
    (menu)?
        <div className="absolute right-0 top-full mt-2 w-40 bg-orange-400 rounded-lg  flex flex-col p-2 gap-2">
        <a href="/" className="text-white hover:bg-orange-500 px-3 py-1.5 rounded transition">Home</a>
        <a href="/products" className="text-white hover:bg-orange-500 px-3 py-1.5 rounded transition">Products</a>
        <a href="/about" className="text-white hover:bg-orange-500 px-3 py-1.5 rounded transition">About</a>
        <a href="/cart" className="text-white hover:bg-orange-500 px-3 py-1.5 rounded transition">Cart</a>
        {/* login button */}
         <div className="flex flex-row  w-fullgap-1.5 px-3 py-2.5 bg-teal-800 rounded-lg items-center justify-center">
          <CircleUserRound color="#ffffff" />
         <a href="#" className=" font-semibold text-white ">login</a>
        </div>
         {/* singup button */}
        <div className="flex flex-row w-full gap-1.5 px-3 py-2.5 bg-teal-800 rounded-lg  items-center justify-center">
          <CircleUserRound color="#ffffff" />
         <a href="#" className=" font-semibold text-white ">Signup</a>
        </div>
      
      </div>:""
   }
   </div>
  </header>
    </div>

   
  

  )
}

export default navbar