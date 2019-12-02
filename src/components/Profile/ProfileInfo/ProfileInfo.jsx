import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from './../../common/Preloader/Preloader';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
    <div> 
        <div>
            <img src="http://piligrim-andy.narod.ru/photo1/pan18/uac1.jpg" alt='userPageHeadImage' />
        </div>
        <div className={s.descriptionBlock}>
            <img src={props.profile.photos.large} />
            ava+description
        </div>
    </div>
    )
}

export default ProfileInfo;