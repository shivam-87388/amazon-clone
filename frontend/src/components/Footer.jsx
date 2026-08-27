"use client"
import React from 'react'

const footer = () => {
  return (
    <footer className="flex items-center bg-[#011732] h-64 justify-around w-full">
        <div className="grid grid-cols-4 ">
            <div className="flex items-center justify-center">
             <img src="/Gemini_Generated_Image_e2nvm6e2nvm6e2nv.png"className="object-center object-contain w-40"/> 
            </div>
            <nav className="flex flex-col items-center text-lg text-white font-medium">Navagation Link
                <ul className="flex flex-col items-center gap-1.5 mt-1.5">
                    <a>home</a>
                    <a>product</a>
                    <a>about-us</a>
                    <a>cart</a>
                </ul>
            </nav>
           <nav className="flex flex-col items-center text-lg text-white font-medium">Social Link
                <ul className="flex flex-col items-center gap-1.5 mt-1.5">
                    <a>instagram</a>
                    <a>facebook</a>
                    <a>Youtube</a>
                    <a></a>
                </ul>
            </nav>
           
            <div className="flex flex-col items-end justify-end text-lg text-white font-medium">
               <div className="flex flex-row gap-1.5">
                <input className="w-64 border-2 border-white rounded-lg "></input>
                <button className="text-md px-3.5 py-1.5 bg-[#FF8D28] rounded-lg font-semibold hover:cursor-pointer hover:bg-[#1DB5A7]">submit</button>

               </div>
            </div>

        </div>
    </footer>
  )
}

export default footer