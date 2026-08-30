import React from 'react'
import {CircleUserRound,ShoppingCart} from 'lucide-react'

const navbar = () => {
  return (
<header className="flex items-center p-4 ">
    <div className="w-full flex flex-row  justify-between ">
      <div className="flex-1 flex justify-start">
        <img className="h-32 w-32" src="/Gemini_Generated_Image_e2nvm6e2nvm6e2nv.png"/>
        </div>
      <div className="flex-1 flex items-center gap-14 justify-center text-teal-800 text-lg font-semibold font-['Lora']">
        <a className="" href="#">home</a>
        <a className="" href="">product</a>
        <a className="" href="">about</a>
      </div>
      <div className="flex-1 flex items-center justify-end gap-6">
          <a href="#">login</a>
          <a href="#">signup</a>
          <a href="#">cart</a>
      </div>
    </div>
</header>
   
  

  )
}

export default navbar