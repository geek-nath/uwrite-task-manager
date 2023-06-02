import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home'
import SignupPage from './pages/signup'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={ <HomePage /> } path='/' />
          <Route element={ <SignupPage /> } path='/signup' />
        </Routes>
      </Router>
    </>
  )
}

export default App
