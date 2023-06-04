import React, { useEffect, useState } from 'react'
import { createAvatar } from '@dicebear/core'
import { initials } from '@dicebear/collection'
import { account } from '../appwriteConfig';
const UserAvatarUI = ({ userName }) => {
  const [ userDetails, setUserDetails ] = useState();
  // const avatar = createAvatar(initials, {
  //   // get userName as seed
  //   seed: userDetail.name,
  // });
  // const avaterJSON = avatar.toJson;
  // console.log(avaterJSON);
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
      <div className='h-8 w-8 rounded-full overflow-hidden items-center justify-center bg-gray-900'>
        
      </div>
    </>
  )
}
export default UserAvatarUI