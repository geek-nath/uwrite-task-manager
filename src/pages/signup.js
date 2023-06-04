import React, { useState } from 'react'
import Logo from '../assets/images/Logo.png'
import { Link } from 'react-router-dom'
import ButtonUI from '../components/button'
import { account } from '../appwriteConfig'
import { ID } from 'appwrite'
import AlertUI from '../components/alert'
import { useNavigate } from 'react-router-dom'
import * as AiIcons from 'react-icons/ai'
const SignupPage = () => {
  const [ userDetail, setUserDetail ] = useState({
    name: '',
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
  const createUserAccount = (e) => {
    e.preventDefault();
    // show that button is processing
    setIsLoading(true);
    // create user account using appwrite createUserAccount function
    const promise = account.create(
      ID.unique(),
      userDetail.email,
      userDetail.password,
      userDetail.name
    );
    promise.then((response) => {
      console.log(response);
      setAlert(true);
      setAlertType('success');
      setAlertMessage('Your account has been created successfully.')
      setIsLoading(false);
    }).catch((error) => {
      console.log(error.message);
      setAlert(true);
      setAlertType('error');
      setAlertMessage('An error occured while creating your account, please try again.')
      setIsLoading(false);
      if(error.message === 'A user with the same email already exists in your project.') {
        setAlertMessage('Email address already in use.');
      }
    })
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
              <label htmlFor="full_name" className="block text-sm font-medium leading-6 text-gray-900">
                Full name
              </label>
              <div className="mt-2">
                <input type='text' name='full_name' autoComplete='name' className="block mt-2 gap-2 items-center no-outline w-full rounded-md outline-none border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6" value={userDetail.name} onChange={(e) => {
                  setUserDetail({
                    ...userDetail,
                    name: e.target.value
                  })
                }}/>
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input type='text' name='full_name' autoComplete='email' className="block outline-none mt-2 gap-2 items-center no-outline w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6" value={userDetail.email} onChange={(e) => {
                  setUserDetail({
                    ...userDetail,
                    email: e.target.value
                  })
                }}/>
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
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
                text={'Create account'}
                isLoading={isLoading}
                onClick={createUserAccount}
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