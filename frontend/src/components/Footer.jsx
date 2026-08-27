
import React from 'react'

const Footer = () => {
  return (
    <footer className="flex items-center bg-[#011732] h-64 justify-around w-full">
        <div className="grid grid-cols-4 ">
            <div className="flex items-center justify-center">
             <img src="/Gemini_Generated_Image_e2nvm6e2nvm6e2nv.png"className="object-center object-contain w-40" alt="brand logo"/> 
            </div>
            <nav className="flex flex-col items-center text-white">
                <h3 className="text-lg ">Navagation Link</h3>
                <ul className="flex flex-col items-center gap-1.5 mt-1.5 font-medium">
                    <li><a href="/">home</a></li>
                    <li><a href="/">product</a></li>
                    <li><a href="/">about</a></li>
                    <li><a href="/">cart</a></li>
                    
                </ul>
            </nav>
           <nav className="flex flex-col items-center  text-white ">
            <h3 className="font-medium text-lg">Social Link</h3>
                <ul className="flex flex-col items-center gap-1.5 mt-1.5 font-medium">
                    <li><a href="/" className="hover:underline">facebook</a></li>
                    <li><a href="/">instagram</a></li>
                    <li><a href="/">Youtube</a></li>
                </ul>
            </nav>
           
            <div className="flex flex-col justify-end text-white font-medium">
                <h3 className="px-1.5 py-1.5 text-lg font-semibold">subscribe</h3>
               <form className="flex flex-row gap-2.5">
                <input placeholder='email' className="px-1.5 py-1.5 w-64 border-2 border-white rounded-lg "></input>
                <button className="text-center text-md px-3.5 py-1.5 bg-[#FF8D28] rounded-lg font-semibold hover:cursor-pointer hover:bg-[#1DB5A7] hover:ring-2 hover:ring-white">submit</button>

               </form>
            </div>

        </div>
        
        
    </footer>
  )
}

export default Footer