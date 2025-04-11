import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Navbar from './components/Navbar'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Layout from './Layout/Layout'


const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Route>
      </Routes>

    </div>

  )
}

export default App