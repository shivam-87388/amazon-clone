import React from 'react'

const createAccount = () => {
  return (
    <div className="min-h-screen bg-white flex justify-center items-center">
      <div style={{ backgroundImage: "url('/rectangle.png')" }} className=" bg-cover bg-no-repeat bg-center ">
      <form className="flex flex-col  items-center justify-center px-8 py-4">
        <h1 className="text-4xl font-bold font-['Lora'] text-white" >Create Account</h1>
        <div className="flex flex-col px-12 py-4 gap-0.5">
          {/* fullname field */}
          <label htmlFor="fullName" className="text-white font-bold font-['Lora']">Full Name</label>
          <input type="text" id="fullName" name="user_name"required className="px-2.5 py-1 border-2 border-white rounded-md"></input>
          {/* email field */}
          <label htmlFor="userEmail" className="text-white font-bold font-['Lora']">Email</label>
          <input type="email" id="userEmail" name="email_address" required className="px-2.5 py-1 border-2 border-white rounded-md"></input>
          {/* password field */}
          <label htmlFor="password" className="text-white font-bold font-['Lora']">Password</label>
          <input type="password" id="password" name="user_password" required className="px-2.5 py-1 border-2 border-white rounded-md"></input>
          {/* confirm password */}
          <label htmlFor="confirmpassword" className="text-white font-bold font-['Lora']">Confirm Password</label>
          <input type="password" id="confirmpassword" name="user_password" required className="px-2.5 py-1 border-2 border-white rounded-md"></input>
        </div>
        <div className=" w-full px-6 py-0.5">
        <button className="w-full bg-teal-600 text-2xl text-white rounded-md ">Create Account</button>

        </div>
        
        
        

      </form>
      
     

      
      </div>
    
      
    

   
    
    </div>
    
  )
}

export default createAccount;