import React from 'react'
import ProfileUp from '../components/ProfileUp';
import Favorits from '../components/Favorits';
import WatchedMatch from '../components/WatchedMatch';

const Profile = () => {
  return (
    <div>
      <ProfileUp/>
      <Favorits userId="1"/>
      <WatchedMatch/>
    </div>
  );
};


export default Profile
