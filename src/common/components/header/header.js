import React from 'react';
import logo from './logo.svg';
import HeaderNavigation from './__navigaion/header__navigation';
import './header.css';

class Header extends React.Component{
    render() {
        return (
            <header className='header'>
                <div className='header__logo'>
                    <h1>CLEARING SERVICE</h1>
                    <img src={logo}/>
                </div>
                <HeaderNavigation menu={this.props.menu}/>

                <div className='header__provider-name'>
                    PROVIDER NAME
                </div>
            </header>
        );
    }
}

export default Header;
