import React from 'react'
import Logo from '../assets/images/Logo.png'
import { Link } from 'react-router-dom'
import ButtonUI from '../components/button'
import InputUI from '../components/input'

const SignupPage = () => {
  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 xl:items-center lg:items-center md:items-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={ Logo } alt="Uwrite company logo" />
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create a new account.
          </h2>
        </div>

        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Full name
              </label>
              <div className="mt-2">
                <InputUI 
                  inputId={'name'}
                  inputName={'name'}
                  inputType={'text'}
                  inputAutoComplete={'name'}
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <InputUI 
                  inputId={'email'}
                  inputName={'email'}
                  inputType={'email'}
                  inputAutoComplete={'email'}
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <InputUI 
                  inputId={'password'}
                  inputName={'password'}
                  inputType={'password'}
                  inputAutoComplete={'current-password'}
                />
              </div>
            </div>

            <div>
              <ButtonUI 
                text={'Create account'}
              />
            </div>
          </form>

          <p className="mt-5 text-center text-sm text-gray-500">
            Already have an account?{' '}
            <Link to="/signin" className="font-semibold leading-6 text-gray-900 underline">
              Sign In.
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default SignupPage