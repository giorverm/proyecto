import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Login from './components/pages/Login'
import Register from './components/pages/Register'
import Horario from './components/pages/Horario'
import { Toaster } from 'react-hot-toast'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Toaster />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/register' element={<Register />}/>
          <Route path='/horarios' element={<Horario />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App