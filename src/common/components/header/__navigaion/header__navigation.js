import React from 'react';
import { Link } from 'react-router-dom';
import './header__navigation.css';

function Header__Navigation({menu}) {
    let menuItems = [];
    if (menu) {
        menuItems = menu.map( item => (
            <li key={item.link}><Link to={item.link}>{item.name}</Link></li>
        ));
    }

    return (
        <nav className='header__navigation'>
            <ul>
                { menuItems }
            </ul>
        </nav>
    )
}

export default Header__Navigation;
