
import React from 'react'
import logo from './../assets/logo.svg'

function show_one(e) {
    document.getElementById("elemnt1").classList.remove('opacity-0')
}
function hide_one(e) {
    document.getElementById("elemnt1").classList.add('opacity-0')
}

function show_two(e) {
    document.getElementById("elemnt2").classList.remove('opacity-0')
}
function hide_two(e) {
    document.getElementById("elemnt2").classList.add('opacity-0')
}

function show_tree(e) {
    document.getElementById("elemnt3").classList.remove('opacity-0')
}
function hide_tree(e) {
    document.getElementById("elemnt3").classList.add('opacity-0')
}


function show_modal(e){
    document.getElementById('modal').classList.remove('hidden')
    console.log('ok');
}
function hide_modal(e){
    document.getElementById('modal').classList.add('hidden')
}


function Header() {
    return (
        <header className='w-full h-[90px] pt-[20px] flex justify-around absolute top-0'>
            <figure className='w-[20%] mt-[-5px]'>
                <img src={logo} alt="" />
            </figure>
            <ul className='w-[50%] hidden md:flex  text-white capitalize  justify-start'>
                <li onMouseMove={show_one} onMouseLeave={hide_one} className='pr-12 cursor-pointer'>products</li>
                <li onMouseMove={show_two} onMouseLeave={hide_two} className='pr-12 cursor-pointer'>developer</li>
                <li onMouseMove={show_tree} onMouseLeave={hide_tree} className='cursor-pointer' >company</li>
            </ul>
            <button className='w-[60px]  h-[25px] pl-2 hidden md:flex rounded-xl  bg-black text-white '>sing in</button>
            <button className='w-[40px]  h-[25px]  md:hidden rounded-xl  bg-black text-white ' onClick={show_modal}><i class="bi bi-list"></i></button>
            
            {/* ---------------HOVER-ONE-------------------- */}
            <div className='w-[40%] h-[80px] opacity-0 bg-white text-[#102a42] rounded-md pt-3 absolute top-12 left-60 z-10 ' id='elemnt1'>
                <h2 className='pl-9 text-sm'>products</h2>
                <ul className=' flex justify-around  pt-4 text-sm'>
                    <li><i class="bi bi-credit-card-fill  text-xs text-gray-400"></i> payment</li>
                    <li><i class="bi bi-credit-card-fill text-xs text-gray-400"></i> terminal</li>
                    <li><i class="bi bi-credit-card-fill text-xs text-gray-400"></i> connect</li>
                </ul>
            </div>
            {/* ---------------HOVER-TWO-------------------- */}
            <div className='w-[40%] h-[80px] opacity-0  bg-white text-[#102a42] rounded-md pt-3 absolute top-12 left-70 z-10' id='elemnt2'>
                <h2 className='pl-9 text-sm'>developers</h2>
                <ul className=' flex justify-around  pt-4 text-sm'>
                    <li><i class="bi bi-hdd-fill text-xs text-gray-400"></i> plugins</li>
                    <li><i class="bi bi-hdd-fill text-xs text-gray-400"></i> libraries</li>
                    <li><i class="bi bi-hdd-fill  text-xs text-gray-400"></i> plugins</li>
                    <li><i class="bi bi-hdd-fill text-xs text-gray-400"></i> billing</li>
                </ul>
            </div>
            {/* ---------------HOVER-TREE-------------------- */}
            <div className='w-[30%] h-[80px] opacity-0  bg-white text-[#102a42] rounded-md pt-3 absolute top-12 right-60 z-10' id='elemnt3'>
                <h2 className='pl-9 text-sm'>company</h2>
                <ul className=' flex justify-around  pt-4 text-sm'>
                    <li><i class="bi bi-briefcase-fill  text-xs text-gray-400"></i> about</li>
                    <li><i class="bi bi-briefcase-fill text-xs text-gray-400"></i> customers</li>
                </ul>
            </div>
            {/* ---------------------MODAL------------------- */}
            <div className='w-[100%]  h-screen bg-zinc-950/75 hidden md:hidden absolute top-0  z-10 ' id='modal'>
                <div className='w-[70%] h-[450px] bg-white mx-auto mt-5 rounded-md'>
                    <div onClick={hide_modal} className='text-[40px] text-end cursor-pointer '><i class="bi bi-x text-[#617d98] "></i></div>
                    <div className='pl-8'>
                        <h2 className='pb-1 text-sm text-[#102a42]'>products</h2>
                        <ul className=' w-[80%] grid grid-cols-2  place-content-around  text-sm'>
                            <li className='text-[10px]'><i class="bi bi-credit-card-fill  text-xs text-[#617d98]"></i> payment</li>
                            <li className='text-[10px]'><i class="bi bi-credit-card-fill text-xs text-[#617d98]"></i> terminal</li>
                            <li className='text-[10px]'><i class="bi bi-credit-card-fill text-xs text-[#617d98]"></i> connect</li>
                        </ul>
                    </div>
                    <div className='pl-8 mt-5'>
                        <h2 className='pb-1 text-sm text-[#102a42]'>developers</h2>
                        <ul className=' w-[80%] grid grid-cols-2  place-content-around text-sm'>
                            <li className='text-[10px]'><i class="bi bi-hdd-fill  text-xs text-[#617d98]"></i> plugins</li>
                            <li className='text-[10px]'><i class="bi bi-hdd-fill text-xs text-[#617d98]"></i> libraries</li>
                            <li className='text-[10px]'><i class="bi bi-hdd-fill text-xs text-[#617d98]"></i> plugins</li>
                            <li className='text-[10px]'><i class="bi bi-hdd-fill text-xs text-[#617d98]"></i>  billing</li>
                        </ul>
                    </div>

                    <div className='pl-8 mt-5'>
                        <h2 className='pb-1 text-sm text-[#102a42]'>company</h2>
                        <ul className=' w-[80%] flex  justify-between  text-sm'>
                            <li className='text-[10px]'><i class="bi bi-briefcase-fill  text-xs text-[#617d98]"></i> about</li>
                            <li className='text-[10px]'><i class="bi bi-briefcase-fill text-xs text-[#617d98]"></i> customers</li>
                        </ul>
                    </div>

                </div>
            </div>
        </header>
    )
}

export default Header