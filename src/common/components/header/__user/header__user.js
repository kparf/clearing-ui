import React from 'react';
import { Link } from 'react-router-dom';
import './header__user.css';

function Header__User({user, onLogout}) {

    if (user && (user.role === 'provider' || user.role === 'client')) {
        const name = user.name ? user.name : user.email;
        return (
            <div className='header__user'>
                {name}
                <span className='header__login-divider'>&#32;|&#32;</span>
                <a className='header__logout' onClick={onLogout}>LOGOUT</a>
            </div>
        )
    }

    return (
        <div className='header__user'>
            <Link to='/content/login'>LOG IN</Link>
            <span className='header__login-divider'>&#32;|&#32;</span>
            <Link to='/content/registration'>REGISTER</Link>
        </div>
    )
}

export default Header__User;
