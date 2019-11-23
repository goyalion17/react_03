import React from 'react';
import s from './Profile.module.css';
import MyPostsContainer from './MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
debugger;
    return (
    <div className={s.content}>
        <ProfileInfo />       
        <MyPostsContainer />
    </div>
    )
}

export default Profile;