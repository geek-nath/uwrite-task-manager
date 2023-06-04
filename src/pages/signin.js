import React, { useState } from 'react'
import Logo from '../assets/images/Logo.png'
import ButtonUI from '../components/button'
import * as AiIcons from 'react-icons/ai'
import { Link, useNavigate } from 'react-router-dom'
import { account } from '../appwriteConfig'
import AlertUI from '../components/alert'
const SignInPage = () => {
  const [ userDetail, setUserDetail ] = useState({
    email: '',
    password: ''
  });
  const [ alert, setAlert ] = useState(false);
  const [ alertType, setAlertType ] = useState('');
  const [ alertMessage, setAlertMessage ] = useState('');
  const [ isLoading, setIsLoading ] = useState(false);
  const [ showPassword, setShowPassword ] = useState(false);
  let navigator = useNavigate('');
  const hideAlert = () => {
    setAlert(false);
  }
  const logUserIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      await account.createEmailSession(userDetail.email, userDetail.password);
      setAlert(true);
      setAlertType('success');
      setAlertMessage('You have successfully logged into your account');
      setIsLoading(false);
      setTimeout(() => {
        navigator('/');
      }, 1000)
    } catch(error) {
      console.log(error.message);
      setIsLoading(false);
      setAlert(true);
      setAlertType('error');
      if(error.message === 'Invalid credentials. Please check the email and password.') {
        setAlertMessage('Invalid credentials. Please check the email and password.');
      } else if(error.message === 'Invalid email: Value must be a valid email address') {
        setAlertMessage('Invalid email: must be a valid email address')
      }
    }
  }
  return (
    <>
      <div className="flex min-h-screen flex-1 flex-col justify-center px-6 py-12 lg:px-8 xl:items-center lg:items-center md:items-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img className="mx-auto h-10 w-auto" src={ Logo } alt="Uwrite company logo" />
          <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign In to your account.
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
              <input type='email' name='email_address' autoComplete='email' className="block outline-none mt-2 gap-2 items-center no-outline w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6" value={userDetail.email} onChange={(e) => {
                setUserDetail({
                  ...userDetail,
                  email: e.target.value
                })
              }}/>
            </div>
          </div>
          <div>
            <div className='flex'>
              <label htmlFor="password" className="block mr-auto text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <Link to={'/forgot_password'} className='underline text-sm text-gray-900 font-semibold'>
                Forgot Passowrd?
              </Link>
            </div>
            <div className="block mt-2 flex gap-2 items-center no-outline w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 hover:ring-2 hover:ring-inset hover:ring-gray-900 sm:text-sm sm:leading-6">
              <input type={showPassword ? 'text' : 'password'} autoComplete='current-password' name='full_name' className="w-full outline-none" value={userDetail.password} onChange={(e) => {
                setUserDetail({
                  ...userDetail,
                  password: e.target.value
                })
              }}/>
              <h5 className='cursor-pointer' onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <AiIcons.AiOutlineEyeInvisible className='text-xl'/> : <AiIcons.AiOutlineEye className='text-xl'/>}
              </h5>
            </div>
          </div>
          <div>
            <ButtonUI 
              text={'Sign In'}
              isLoading={isLoading}
              onClick={logUserIn}
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
export default SignInPage