import React, { useEffect, useState } from 'react'
import { account } from '../appwriteConfig';
import Avatar from 'react-avatar';
const UserAvatarUI = ({ showNameAndEmail }) => {
  const [ userDetails, setUserDetails ] = useState();
  useEffect(() => {
    const getUserData = account.get();
    getUserData.then(
      function(response) {
        setUserDetails(response);
      }, function(error) {
        console.log(error);
      }
    )
  }, []);
  return (
    <>
      { typeof userDetails === 'object' ? <div className='flex gap-2 items-center'>
        <Avatar name={userDetails.name} round={true} size='35'/>
        { showNameAndEmail ? <div className='text-left hidden xl:block lg:block'>
          <h5 className='text-base text-gray-900'>{userDetails.name}</h5>
          <h6 className='text-sm text-gray-400'>{userDetails.email}</h6>
        </div> : null }
      </div> : <img className="h-8 w-8 rounded-full"  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="avatar" /> }
    </>
  )
}
export default UserAvatarUI