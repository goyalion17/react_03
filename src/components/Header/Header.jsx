import React from 'react';
import s from './Header.module.css';
import {NavLink} from 'react-router-dom'

const Header = (props) => {
    return (
    <header className={s.header}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpTbH4W80IM8DSRP0knztdd8uqU8f9dNvdU_5S53NBi59nCWoz&s" alt='logo' />

        <div className={s.loginBlock}>
            { props.isAuth
            ? <div>{props.login} 
                <a onClick={props.logout}> &raquo;
                </a>
            </div>
            : <NavLink to='/login'>Login</NavLink> }
        </div>
    </header>
    )
}

export default Header;