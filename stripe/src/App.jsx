import { useState } from 'react'
import Header from './component/header'
import Section from './component/section'
import './App.css'

function App() {

  return (
    <body className='w-full h-screen '>
      <div className='w-full back-clip h-screen'></div>
        <div>
          <Header />
        </div>
        <div>
          <Section />
        </div>

    </body>
  )
}

export default App
