import React from 'react';
import logo from './logo.svg';
import Header__Navigation from './__navigaion/header__navigation';
import './header.css';
import menu from './menu';
import Header__User from "./__user/header__user";
import { connect } from 'react-redux';

class Header extends React.Component {
    render() {
        const { user } = this.props;
        return (
            <header className='header'>
                <div className='header__logo'>
                    <h1>CLEARING SERVICE</h1>
                    <img src={logo} alt=""/>
                </div>
                <Header__Navigation menu={menu}/>
                <Header__User user={user}/>
            </header>
        );
    }
}

function mapStateToProps(state) {
    return {
        user: state.common.user
    }
}

export default connect(mapStateToProps)(Header);
