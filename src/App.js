import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/home'
import SignupPage from './pages/signup'
import NavbarComponentUI from './components/navbar'

const App = () => {
  return (
    <>
      <Router>
        <NavbarComponentUI />
        <Routes>
          <Route element={ <HomePage /> } path='/' />
          <Route element={ <SignupPage /> } path='/signup' />
        </Routes>
      </Router>
    </>
  )
}

export default App
