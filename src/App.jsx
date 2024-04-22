import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import { Manager } from './components/Manager'
Navbar

function App() {

  return (
    <>
      <Navbar />
      <Manager/>
    </>
  )
}

export default App
