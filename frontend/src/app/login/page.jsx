'use client'
import React from 'react'

const login = () => {
  return (
  <div className="min-h-screen w-full flex items-center justify-center bg-white">
  <div className="w-full max-w-md p-6  bg-center bg-no-repeat rounded-lg">

    <h1 className="text-center text-white text-2xl font-bold font-['Merriweather']">
      Login Form
    </h1>

    <form className="mt-8 flex flex-col gap-5">

      <div className="flex flex-col gap-2">
        <label className="text-white text-base font-normal font-['Merriweather']">
          Email
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          className="h-10 w-full px-3 rounded-lg outline outline-1 outline-white bg-transparent text-white placeholder:text-white"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-white text-base font-normal font-['Merriweather']">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter your password"
          className="h-10 w-full px-3 rounded-lg outline outline-1 outline-white bg-transparent text-white placeholder:text-white"
        />
      </div>

      <button
        type="submit"
        className="self-center px-6 py-2 bg-teal-700 rounded-lg text-white text-base font-semibold font-['Merriweather']"
      >
        Login
      </button>

    </form>

  </div>
</div>
    
  )
}

export default login;