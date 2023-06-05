import React, { useEffect, useState } from 'react'
import { account } from '../appwriteConfig';
import Avatar from 'react-avatar';
const UserAvatarUI = () => {
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
      <Avatar name={userDetails.name} round={true} size='35'/>
    </>
  )
}
export default UserAvatarUI