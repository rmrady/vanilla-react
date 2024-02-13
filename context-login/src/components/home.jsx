import React from 'react'
import Login from './login'

function home() {
  return (
    <div className='w-full h-[100vh] bg-blue-200 flex flex-col items-center fixed justify-center'>
        {
            false? <div className='text-[40px] font-black text-green-500'>شما وارد شدید </div> :<Login/>
        }
    </div>
  )
}

export default home