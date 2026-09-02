"use client"
import React, { useState } from 'react'
import { Menu, X} from 'lucide-react';


const page = () => {
  const [menu , setmenu] = useState(false);
  const handleClick =()=>{
    setmenu(!menu)
  }

  return (
    
  <header className="flex flex-row justify-between items-center bg-white m-2.5">
    <img className="w-24 h-24" src="/Gemini_Generated_Image_e2nvm6e2nvm6e2nv.png" alt='logo'/>
   <button onClick={handleClick} className="bg-teal-800 rounded-md py-2.5 px-2.5">
  {menu?<X color="#ffff" />:<Menu color="#ffff" />}
   </button>
   {
    (menu)?
            <nav className="p-2.5 bg-orange-400">
            
            <li>about</li>
            <li></li>
            <li>contact</li>
        </nav>:
        ""
   }
  </header>

  )
}

export default page