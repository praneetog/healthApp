import { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Content from './components/Content'
import About from './components/About'

function App() {

  return (
    <>
      <div>
        <Navbar/>
        <Main />
        <About />
        <Content />
      </div>
    </>
  )
}

export default App
