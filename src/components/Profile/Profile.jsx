import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts';

const Profile = () => {
    return (
    <div className={s.content}>
        <div><img src="http://piligrim-andy.narod.ru/photo1/pan18/uac1.jpg"/></div>
        <div><img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg"/></div>
        
        <MyPosts />
    </div>
    )
}

export default Profile;