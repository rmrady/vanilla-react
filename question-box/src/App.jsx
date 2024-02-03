import React, { useRef } from 'react'
import './App.css'

function App() {
  const box1 = useRef()
  const box2 = useRef()
  const box3 = useRef()
  const plus1 = useRef()
  const mins = useRef()
  function show1(){
    box1.current.classList.toggle('h-[180px]')
    plus1.current.classList.toggle('hidden')
    mins.current.classList.toggle('hidden')
  }
  function show2(){
    box2.current.classList.toggle('h-[180px]')
  }
  function show3(){
    box3.current.classList.toggle('h-[180px]')
  }


  return (
    <main className='w-full h-[100vh] bg-slate-200 flex flex-col  items-center pt-40'>
      <div className='w[80%] flex flex-col items-center'>
        <h2 className='text-[40px] font-mono font-black text-[#936a24]'>general questions</h2>


        {/* question-box 1 */}
        <div ref={box1} className='w-[60%] h-[70px] bg-white rounded-md overflow-hidden p-7 mt-7 transitionR'>
          <h2 onClick={show1} className='texy-[20px] font-bold border-b border-gray-400 text-[#131154] flex justify-between cursor-pointer pb-5'>
            do you accept all major credit cards? 
          <span ref={plus1}  className='text-[17px]  font-black  text-[#936a24] border-2 rotat border-[#936a24] px-2 hover:rotate-90 transitionR'>+</span>
          <span ref={mins}  className='text-[17px] hidden font-black  text-[#936a24] border-2 rotat border-[#936a24] px-2 transitionR'>-</span>
          </h2>
          <p className=' text-gray-500 pt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.</p>
        </div>


        {/* question-box 2 */}
        <div ref={box2} className='w-[60%] h-[70px] bg-white rounded-md overflow-hidden p-7 mt-7 transitionR'>
          <h2 onClick={show2} className='texy-[20px] font-bold border-b border-gray-400 text-[#131154] flex justify-between pb-5'>do you suppport local farmers? <span className='text-[17px] font-black px-2  text-[#936a24] border-2 border-[#936a24] hover:rotate-90 transitionR'>+</span></h2>
          <p className=' text-gray-500 pt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.</p>
        </div>


        {/* question-box 3 */}
        <div ref={box3} className='w-[60%] h-[70px] bg-white rounded-md overflow-hidden p-7 mt-7 transitionR'>
          <h2 onClick={show3} className='texy-[20px] font-bold border-b border-gray-400 text-[#131154] flex justify-between pb-5'>do you use organic ingredients? <span className='text-[17px] font-black px-2  text-[#936a24] border-2 border-[#936a24] hover:rotate-90 transitionR'>+</span></h2>
          <p className=' text-gray-500 pt-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.</p>
        </div>

      </div>
    </main>
  )
}

export default App