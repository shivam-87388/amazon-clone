"use client"
import React from 'react'

const footer = () => {
  return (
    <footer className="bg-[#011732] w-full h-80">
        <div className="grid grid-cols-4 items-center justify-around p-4">
            <img src=""></img>
            <nav className="flex flex-col justify-center items-center text-white font-md ">Navigation Link
                <ul className="flex flex-col gap-1">
                    <a href=''>home</a>
                    <a href=''>Product</a>
                    <a href=''>about</a>
                    <a href=''>cart</a>
                </ul>
            </nav>
            
        </div>
       

    </footer>
  )
}

export default footer