import React from 'react'
import {CircleUserRound,ShoppingCart} from 'lucide-react'

const navbar = () => {
  return (
    <header className="grid grid-cols-3 py-4 px-8 items-center">
      <div className="flex items-center justify-start">
        <img src="./Gemini_Generated_Image_e2nvm6e2nvm6e2nv.png" className="h-32 justify-start"></img>
      </div>
      <nav className="flex items-center justify-center gap-12">
        <a href="" className="text-xl text-teal-800 font-[lora] font-semibold hover:underline">Home</a>
        <a href=""className="text-xl text-teal-800 font-[lora] font-semibold hover:underline">Product</a>
        <a href=""className="text-xl text-teal-800 font-[lora] font-semibold hover:underline">About</a>
      </nav>
      <div className="flex items-center justify-end gap-4">
       
       <div className="flex items-center gap-1.5  bg-teal-800 text-white px-2.5 py-2 rounded-md text-xl font-medium ring-2 hover:ring-teal-800 hover:border-2 hover:border-white border-2 border-transparent">
          <CircleUserRound />
          <a href='./SignUp'>signup</a>

        </div>
         <div className="flex items-center gap-1.5 w-24 bg-teal-800 text-white px-2.5 py-2 rounded-md text-xl font-medium ring-2 hover:ring-teal-800 hover:border-2 hover:border-white border-2 border-transparent">
          <CircleUserRound />
          <a href='#'>login</a>
        </div>
         <div className="flex items-center gap-1.5  bg-teal-800 text-white px-2.5 py-2 rounded-md text-xl font-medium ring-2 hover:ring-teal-800 hover:border-2 hover:border-white border-2 border-transparent">
      <ShoppingCart />
        </div>
      </div>

    </header>
  )
}

export default navbar