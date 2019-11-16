import React from 'react';
import s from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
    <div> 
        <div>
            <img src="http://piligrim-andy.narod.ru/photo1/pan18/uac1.jpg"/>
        </div>
        <div className={s.descriptionBlock}>
            ava+description
        </div>
    </div>
    )
}

export default ProfileInfo;