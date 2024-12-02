import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-slate-100 h-screen w-screen'>
    <Routes>

      <Route path='/' element={<Navbar/>}/>
      <Route path='/footer' element={<Footer/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App