import React from 'react'


const createAccount = () => {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center">
      <div style={{ backgroundImage: "url('/rectangle.png')" }} className=" bg-cover bg-no-repeat bg-center">
      <form className="flex flex-col items-center justify-center px-8 py-4">
        <h1 className="font-bold font-['Lora'] text-white text-2xl ">Create Account</h1>
        <label htmlFor='email' className="text-xl text-white">email</label>
        <input type="email" id="email" name="email" placeholder='shopping@gmail.com'></input>
        <label htmlFor='email' className="text-xl text-white">email</label>
        <input type="email" id="email" name="email" placeholder='shopping@gmail.com'></input>
        <label htmlFor='email' className="text-xl text-white">email</label>
        <input type="email" id="email" name="email" placeholder='shopping@gmail.com'></input>


      </form>
      
     

      
      </div>
    
      
    

   
    
    </div>
    
  )
}

export default createAccount;