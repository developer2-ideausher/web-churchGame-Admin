"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Login = () => {
    const router = useRouter()
  return (
    <div className='w-full flex flex-row h-full'>
        <div className='w-1/2 bg-[#B9B4FD]'>
        1
            
        </div>
        <div className='w-1/2 flex items-center justify-start px-16'>
        <div className='flex flex-col items-start  gap-5 w-full '>
            <h1 className='text-[#090914] font-bold 2xl:text-4xl text-3xl'>Welcome back!</h1>
            <div className='flex flex-col gap-1 w-full'>
                <label htmlFor="email" className='font-normal 2xl:text-xl text-base text-[#090914]'>Email</label>
                <input type="email" id="email" className='bg-[#F8FAFC] rounded-xl border border-[#CBD5E1] w-full 2xl:px-2 2xl:py-3 p-2 focus:outline-none' placeholder="Enter your email"/> 
                
            </div>
            <div className='flex flex-col gap-1 w-full'>
                <label htmlFor="pass" className='font-normal 2xl:text-xl text-base text-[#090914]'>Password</label>
                <input type="pass" id="pass" className='bg-[#F8FAFC] rounded-xl border border-[#CBD5E1] w-full 2xl:px-2 2xl:py-3 p-2 focus:outline-none' placeholder="Enter your password"/>
                <div className='flex justify-end'>
                    <button className='text-[#4E4C6A] font-semibold text-sm'>Forgot Password?</button>
                    
                </div>
                
            </div>
            <button onClick={()=>router.push("/dashboard")} className='bg-[#4E4C6A] 2xl:text-xl font-semibold text-base text-white py-4 px-6 rounded-full w-full mt-4 cursor-pointer'>Login</button>

            
        </div>
            
        </div>
    </div>
  )
}

export default Login