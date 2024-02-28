import React, { useEffect, useState } from 'react'

function Welcome() {
    const [showWelcome, setShowWelcome] = useState();
    useEffect(()=>{
        const data =localStorage.getItem("show_app_intro")
        setShowWelcome(JSON.parse(data) ?? true)
    },[])
    const onHidewelcome=()=>{
        setShowWelcome(false);
        localStorage.setItem("show_app_intro", JSON.stringify(false))
    }
  return (
    <>
        {showWelcome && (<div className='w-full h-[100vh] bg-[#000000b8] absolute top-0'>
        <p className='w-full text-end p-5'>
        <span onClick={onHidewelcome} className='text-[25px] font-bold bg-red-300 text-center px-3 py-1'>x</span> 
        </p>
    
        <p className='w-full text-[70px] text-white font-bold text-center pt-52'>* welcom to my websaite *</p>

        </div>)}
    </>
    
    
  )
}

export default Welcome