import React from 'react'

function login() {
  return (
    <div className='w-full h-[100vh] bg-blue-200 flex flex-col items-center pt-20'>
        <div className='w-[40%] rounded-xl bg-neutral-600 p-10 text-center'>
            <input className='w-[70%] rounded-xl bg-slate-400 text-slate-100 px-5 py-2 mt-5' type="text"/>
            <input className='w-[70%] rounded-xl bg-slate-400 text-black px-5 py-2 mt-5' type="text"/>
            <br/>
            <button className='bg-blue-400 rounded-lg px-8 py-2 mt-5 '>submit</button>
        </div>

    </div>
  )
}

export default login