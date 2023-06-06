import React, { useState } from 'react'
import Logo from '../assets/images/Logo.png'
import AlertUI from '../components/alert';
import { Link } from 'react-router-dom';
import ButtonUI from '../components/button';
import { account } from '../appwriteConfig';
const ForgotPassword = () => {
  const [ alert, setAlert ] = useState(false);
  const [ alertType, setAlertType ] = useState('');
  const [ alertMessage, setAlertMessage ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);
  const hideAlert = () => {
    setAlert(false);
  }
  const [ userEmail, setUserEmail ] = useState('');
  // recover password function
  const promise = account.createRecovery(userEmail, 'https://localhost:3000');
  const recoverPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      promise.then((response) => {
        setIsLoading(false);
        setAlert(true);
        setAlertType('success');
        setAlertMessage('The recovery link has been sent to your email');
        console.log(response)
      }).catch((error) => {
        setIsLoading(false);
        setAlert(true);
        setAlertType('error');
        setAlertMessage(error.message);
      });
    }, 2000)
  }
  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 xl:items-center lg:items-center md:items-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={ Logo } alt="Uwrite company logo" />
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Enter email address.
          </h2>
        </div>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          { alert ? <AlertUI 
            onClick={hideAlert}
            alertMessage={alertMessage}
            alertType={ alertType === 'success' ? 'bg-lime-50 text-lime-600 ring-1 ring-lime-600' : 'bg-red-200 text-red-600 ring-1 ring-red-600' }
          /> : null }
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
              Email address
            </label>
            <div className="mt-2">
              <input type='email' name='email_address' autoComplete='email' className="block outline-none mt-2 gap-2 items-center no-outline w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6" value={userEmail} onChange={(e) => setUserEmail(e.target.value)}/>
            </div>
          </div>
          <div>
            <ButtonUI 
              text={'Recover Password'}
              isLoading={isLoading}
              onClick={recoverPassword}
            />
          </div>
          </form>
          <p className="mt-5 text-center text-sm text-gray-500">
            New to Uwrite ?{' '}
            <Link to="/signup" className="font-semibold leading-6 text-gray-900 underline">
              Create account.
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}
export default ForgotPassword