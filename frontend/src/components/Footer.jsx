"use client"
import React from 'react'

const footer = () => {
  return (
    <footer className="flex items-center bg-[#011732] h-64 w-full">
        <div className="grid grid-cols-4 w-full justify-center ">
            <div className="flex items-center justify-center">
             <img src="/Gemini_Generated_Image_e2nvm6e2nvm6e2nv.png"className="object-center object-contain w-40"/> 
            </div>
            <nav className="flex flex-col text-center justify-center text-lg text-white font-medium h-full">Navagation Link
            <ul className="flex flex-col gap-1.5">
                <a>home</a>
                <a>product</a>
                <a>cart</a>
            </ul>
            </nav>
            <nav className="flex justify-center text-lg text-white font-medium">social Link</nav>
            <ul>
                <a></a>
                <a></a>
                <a></a>
            </ul>
            <nav className="flex justify-center text-lg text-white font-medium">Contact us
                <a></a>
                <a></a>
                <a></a>
            </nav>

        </div>
    </footer>
  )
}

export default footer