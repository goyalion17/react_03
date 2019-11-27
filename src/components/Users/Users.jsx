import React from 'react';
import styles from './Users.module.css';

let Users = (props) => {
    
    if (props.users.length === 0) {
        props.setUsers( [
            {
                id: 1,
                photoUrl: 'https://tv.ua/i/93/93/36/939336/ab6c8064aacc68eb549a045c9f9fedf1-quality_70Xresize_crop_1Xallow_enlarge_0Xw_750Xh_463.jpg',
                followed: false,
                fullName: 'Irina',
                status: 'I\'m a boss',
                location: {city: 'Donetsk', country: 'Russia'}
            },
            {
                id: 2,
                photoUrl: 'https://tv.ua/i/93/93/36/939336/ab6c8064aacc68eb549a045c9f9fedf1-quality_70Xresize_crop_1Xallow_enlarge_0Xw_750Xh_463.jpg',
                followed: true,
                fullName: 'Ivan',
                status: 'I\'m a boss too',
                location: {city: 'Kovel', country: 'Belarus'}
            },
            {
                id: 3,
                photoUrl: 'https://tv.ua/i/93/93/36/939336/ab6c8064aacc68eb549a045c9f9fedf1-quality_70Xresize_crop_1Xallow_enlarge_0Xw_750Xh_463.jpg',
                followed: false,
                fullName: 'Ludmila',
                status: 'I\'m a boss too',
                location: {city: 'Moscow', country: 'Russia'}
            } 
    ]
    )
}

    return <div>
        {
            props.users.map(u => <div key={u.id} >
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.photo} />
                    </div>
                    <div>
                        {u.followed
                        ? <button onClick={ () => {props.unfollow(u.id)}}>Unfollow</button>
                        : <button onClick={ () => {props.follow(u.id)}}>Follow</button>}        
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;