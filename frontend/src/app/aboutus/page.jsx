"use client"
import React, { useState } from 'react'
import { Menu, X} from 'lucide-react';
import {CircleUserRound,ShoppingCart} from 'lucide-react'



const page = () => {
  const [menu , setmenu] = useState(false);
  const handleClick =()=>{
    setmenu(!menu)
  }

  return (
    
  <header className="flex flex-row justify-between items-center bg-white m-2.5">
    <img className="w-24 h-24" src="/Gemini_Generated_Image_e2nvm6e2nvm6e2nv.png" alt='logo'/>
    <div className="relative flex flex-col pr-3">
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

  )
}

export default page