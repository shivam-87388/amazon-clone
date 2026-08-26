'use client'
import React from 'react'
import products from './data'

const page = () => {
  return (
    <div className="p-4">
      <div className="p-4 grid grid-cols-4 gap-4">
      {products.map((product)=>{
        return (
        
       <diV key={product.id} className="w-72 rounded-md bg-amber-300 shadow-md p-3.5 ">
            <img src={product.pic} className='w-64 h-64 rounded-lg'></img>
            <div className="flex flex-col py-1">
                
            <h1 className="text-lg leading-tight font-semibold text-gray-500">{product.name}</h1>
            <p className="mt-1.5">{product.desc}</p>
           
            </div>

        </diV>
       
        )
      })}
      </div>
    </div>
  )
}

export default page


  