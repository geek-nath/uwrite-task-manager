import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home'
import SignupPage from './pages/signup'
import SigninPage from './pages/signin'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={ <HomePage /> } path='/' />
          <Route element={ <SignupPage /> } path='/signup' />
          <Route element={ <SigninPage /> } path='/signin' />
        </Routes>
      </Router>
    </>
  )
}

export default App
