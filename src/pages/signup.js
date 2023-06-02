import React, { useState } from 'react'
import Logo from '../assets/images/Logo.png'
import { Link } from 'react-router-dom'
import ButtonUI from '../components/button'
import InputUI from '../components/input'
import { registerAccount } from '../appwriteConfig'
import { ID } from 'appwrite'
import AlertUI from '../components/alert'
import { useNavigate } from 'react-router-dom'

const SignupPage = () => {

  const [ name, setName ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ alert, setAlert ] = useState(false);
  const [ alertType, setAlertType ] = useState('');
  const [ alertMessage, setAlertMessage ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);

  let navigator = useNavigate('');

  const hideAlert = () => {

    setAlert(false);

  }

  const createUserAccount = (e) => {

    e.preventDefault();

    setIsLoading(true);

    setTimeout(() => {

      registerAccount.create(
        ID.unique(),
        email,
        password,
        name
      ).then(res => {
  
        setIsLoading(false);
        setAlert(true);
        setAlertType('success');
        setAlertMessage('Account created. Check email for account verification!')

        setTimeout(() => {

          navigator('/signin')

        }, 3000)
  
        
      }).catch((err) => {

        setPassword('');
        setIsLoading(false)
  
        if(err.message === 'A user with the same email already exists in your project.') {
  
          setAlert(true);
          setAlertType('error');
          setAlertMessage('Email address already in use.')
  
        } else {
  
          setAlert(true);
          setAlertType('error');
          setAlertMessage('An error occured, please try again.')
  
        }
  
      });

    }, 3000)

  }

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
          { alert ? <AlertUI 
            onClick={hideAlert}
            alertMessage={alertMessage}
            alertType={ alertType === 'success' ? 'bg-lime-50 text-lime-600 ring-1 ring-lime-600' : 'bg-red-200 text-red-600 ring-1 ring-red-600' }
          /> : null }

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
                  value={ name }
                  onChange={ (e) => setName(e.target.value) }
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
                  value={ email }
                  onChange={ (e) => setEmail(e.target.value) }
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
                  value={ password }
                  onChange={ (e) => setPassword(e.target.value) }
                />
              </div>
            </div>

            <div>
              <ButtonUI 
                text={'Create account'}
                onClick={createUserAccount}
                isLoading={isLoading}
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