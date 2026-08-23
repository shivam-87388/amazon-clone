import React from 'react'

const navbar = () => {
  return (
    <div className="grid grid-cols-3 py-4 px-8 items-center">
      <div className="flex items-center justify-start">
        <img src="./Gemini_Generated_Image_e2nvm6e2nvm6e2nv.png" className="h-32 justify-start"></img>
      </div>
      <nav className="flex items-center justify-center gap-12">
        <a href="" className="text-lg text-teal-800 font-[lora] font-semibold hover:underline">Home</a>
        <a href=""className="text-lg text-teal-800 font-[lora] font-semibold hover:underline">product</a>
        <a href=""className="text-lg text-teal-800 font-[lora] font-semibold hover:underline">about</a>
      </nav>
      <div className="flex items-center justify-end gap-4">
        <a href="#" className="w-24 text-center bg-teal-800 text-white px-2.5 py-2 rounded-md text-lg font-medium ring-2 hover:ring-teal-800 hover:border-2 hover:border-white border-2 border-transparent">signup</a>
        <a href="#" className="w-24 text-center bg-teal-800 text-white px-2.5 py-2 rounded-md text-lg font-medium ring-2 hover:ring-teal-800 hover:border-2 hover:border-white border-2 border-transparent">login</a>
        

      </div>

    </div>
  )
}

export default navbar