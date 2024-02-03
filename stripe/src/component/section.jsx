import React from 'react'
import phone from './../assets/phone.svg'

function Section() {
  return (
    <section className='w-full  flex justify-around  absolute top-20'>
        <div className='w-[50%] pl-5' >
        <h2 className='text-[25px] sm:text-[55px]  font-bold'>Payments </h2>
        <h2 className='text-[25px] sm:text-[55px] md:mt-[-20px] font-bold'>infrastructure</h2>
        <h2 className='text-[25px] sm:text-[55px] md:mt-[-30px] font-bold'>for the internet </h2>
        <p className=' text-[10px]  sm:text-xs text-gray-500'>
        Millions of companies of all sizes—from startups to Fortune 500s—use Stripe’s  software and APIs to accept payments, send payouts, and manage their <br />businesses online. 
        </p>
        <button className='w-[80px] h-[25px] text-[12px] mt-5 rounded-xl  bg-black text-white '>Start now</button>
        </div>
        <div className='w-[30%] h-[100px]  mt-[-20px] ml-10'>
            <img src={phone} className='w-[60%] hidden md:flex' alt="" />
        </div>
    </section>
  )
}

export default Section