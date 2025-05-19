import React from 'react'
import ProfileUp from '../components/ProfileUp';
import Favorits from '../components/Favorits';

const Profile = () => {
  return (
    <div>
      <ProfileUp/>
      <Favorits userId="1"/>
    </div>
  );
};


export default Profile
