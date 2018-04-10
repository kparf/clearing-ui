import React from 'react';
import logo from './logo.svg';
import Header__Navigation from './__navigaion/header__navigation';
import './header.css';
import menu from './menu';
import Header__User from "./__user/header__user";
import { connect } from 'react-redux';

class Header extends React.Component{
    render() {

        return (
            <header className='header'>
                <div className='header__logo'>
                    <h1>CLEARING SERVICE</h1>
                    <img src={logo} alt=""/>
                </div>
                <Header__Navigation menu={menu}/>
                <Header__User />
            </header>
        );
    }
}

export default connect()(Header);
