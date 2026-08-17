import React from 'react'

const createAccount = () => {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center">
      <div style={{ backgroundImage: "url('/rectangle.png')" }} className=" bg-cover bg-no-repeat bg-center">
      <form className="flex flex-col items-center justify-center px-12 py-12">
        <h1 className="text-4xl font-bold font-['Lora'] text-white" >Create Account</h1>
        <div className="flex flex-col w-full px-2 py-4 gap-1">
          {/* fullname field */}
          <div className="flex flex-col text-white font-['Lora']">
          <label htmlFor="fullName" className=" font-bold">Full Name</label>
          <input type="text" id="fullName" name="user_name"required className="px-2.5 py-1 border-2 border-white rounded-md focus:outline-none"></input>
          </div>
          
          {/* email field */}
          <div className="flex flex-col text-white font-['Lora']">
          <label htmlFor="userEmail" className="font-bold ">Email</label>
          <input type="email" id="userEmail" name="email_address" required className="px-2.5 py-1 border-2 border-white rounded-md focus:outline-none"></input>
          </div>
          
          {/* password field */}
          <div className="flex flex-col text-white font-['Lora']">
          <label htmlFor="password" className=" font-bold ">Password</label>
          <input type="password" id="password" name="user_password" required className="px-2.5 py-1 border-2 border-white rounded-md focus:outline-none"></input>
          </div>
         
          {/* confirm password */}
          <div className="flex flex-col text-white font-['Lora']">
          <label htmlFor="confirmpassword" className=" font-bold ">Confirm Password</label>
          <input type="password" id="confirmpassword" name="user_password" required className="px-2.5 py-1 border-2 border-white rounded-md focus:outline-none"></input>
          </div>
          
          
        </div>
        {/* button */}
       

        <button type="submit" className="w-full hover:cursor-pointer hover:bg-teal-800 py-1.5 bg-teal-600 text-2xl text-white rounded-md">Create Account</button>
        

       
        
        
        

      </form>
      
     

      
      </div>
    
      
    

   
    
    </div>
    
  )
}

export default createAccount;