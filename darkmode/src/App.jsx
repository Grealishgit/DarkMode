import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/home'
import Navbar from './components/Navbar'
import Login from './components/Login'
import SignUp from './components/SignUp'
import Layout from './Layout/Layout'
import Sign from './pages/Sign'
import Design from './pages/Design'
import Homes from './pages/Homes'
import Main from './pages/Main'
import About from './pages/About'
import Contact from './pages/Contact'


const App = () => {
  const location = useLocation();
  return (
    <div>
      {location.pathname !== '/login' && 'signup' && <Navbar />}


      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Main />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/homes' element={<Homes />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>

    </div>

  )
}

export default App