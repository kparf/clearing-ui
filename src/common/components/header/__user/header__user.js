import React from 'react';
import { Link } from 'react-router-dom';
import './header__user.css';

function Header__User({user}) {

    if (user) {
        const name = user.name ? user.name : user.email;
        return (
            <div className='header__user'>
                name
            </div>
        )
    }

    return (
        <div className='header__user'>
            <Link to='/content/login'>LOGIN</Link>
            <span className='header__login-divider'>&#32;|&#32;</span>
            <Link to='/content/registration'>REGISTER</Link>
        </div>
    )
}

export default Header__User;
