import React from 'react'

const login = () => {
  return (
    <div className="w-[1440px] h-[1024px] p-4 bg-white inline-flex justify-center items-center gap-2.5">
  <div className="w-96 h-[541px] px-4 py-6 inline-flex flex-col justify-center items-center gap-2.5">
    <div className="text-center justify-start text-white text-2xl font-bold font-['Merriweather']">login form</div>
    <div className="self-stretch px-8 flex flex-col justify-start items-start gap-2.5">
      <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
        <div className="self-stretch h-14 flex flex-col justify-start items-start gap-1">
          <div className="self-stretch justify-start text-black text-base font-normal font-['Merriweather']">Email</div>
          <div className="self-stretch px-2 py-1 rounded-lg outline outline-1 outline-offset-[-1px] outline-white inline-flex justify-start items-center gap-2.5">
            <div className="text-center justify-start text-white text-base font-normal font-['Merriweather']">Ram@gamil.com</div>
          </div>
        </div>
        <div className="self-stretch h-14 flex flex-col justify-start items-start gap-1">
          <div className="self-stretch justify-start text-black text-base font-normal font-['Merriweather']">Password</div>
          <div className="self-stretch px-2 py-1 rounded-lg outline outline-1 outline-offset-[-1px] outline-white inline-flex justify-start items-center gap-2.5">
            <div className="text-center justify-start text-white text-base font-normal font-['Merriweather']">Password</div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col justify-center items-center gap-2.5">
        <div className="px-3.5 py-2 bg-teal-500 rounded-lg inline-flex justify-center items-center gap-2.5">
          <div className="justify-start text-white text-base font-semibold font-['Merriweather']">login</div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default login;