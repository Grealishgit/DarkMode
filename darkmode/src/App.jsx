import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/home'
import Navbar from './components/Navbar'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Layout from './Layout/Layout'
import Sign from './pages/Sign'


const App = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== '/' && 'signup' && <Navbar />}


      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Sign />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Route>
      </Routes>

    </div>

  )
}

export default App