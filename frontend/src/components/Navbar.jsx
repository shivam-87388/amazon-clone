import React from 'react'

const navbar = () => {
  return (
    <div className="flex flex-row py-4 px-4 items-center justify-between">
      <div>
        <img src="./Gemini_Generated_Image_e2nvm6e2nvm6e2nv.png" className="h-32 justify-start"></img>
      </div>
      <nav className="flex flex-row gap-6 justify-center">
        <a href="" className="text-lg text-teal-800 font-[lora] font-semibold hover:underline">Home</a>
        <a href=""className="text-lg text-teal-800 font-[lora] font-semibold hover:underline">product</a>
        <a href=""className="text-lg text-teal-800 font-[lora] font-semibold hover:underline">about</a>
      </nav>
      <div className="flex gap-4">
        <a href="#" className="flex-1 bg-teal-800 text-white px-2.5 py-2 rounded-md text-lg font-medium ring-2 hover:ring-teal-800 hover:border-2 hover:border-white border-2 border-transparent">signup</a>
        <a href="#" className="flex-1 bg-teal-800 text-white px-2.5 py-2 rounded-md text-lg font-medium ring-2 hover:ring-teal-800 hover:border-2 hover:border-white border-2 border-transparent">login</a>
        

      </div>

    </div>
  )
}

export default navbar