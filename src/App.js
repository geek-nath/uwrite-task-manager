import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './pages/home'
import SignupPage from './pages/signup'
import SigninPage from './pages/signin'
import ForgotPassword from './pages/forgotPassword'

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route element={ <HomePage /> } path='/' />
          <Route element={ <SignupPage /> } path='/signup' />
          <Route element={ <SigninPage /> } path='/signin' />
          <Route element={ <ForgotPassword /> } path='/forgot_password' />
        </Routes>
      </Router>
    </>
  )
}

export default App
