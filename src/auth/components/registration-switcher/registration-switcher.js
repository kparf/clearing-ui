import React from 'react';
import './registration-switcher.css';
import clientImg from './client.svg';
import providerImg from './provider.svg';
import {
    Link
} from 'react-router-dom';

function RegistrationSwitcher() {
    return (
        <div className='registration-switcher'>
            <div className='registration-switcher__option'>
                <Link to='/content/client/registration'>
                    <h1>CLIENT</h1>
                    <img src={clientImg}/>
                </Link>
            </div>
            <div className='registration-switcher__option'>
                <Link to='/content/provider/registration'>
                    <h1>CLEARING COMPANY</h1>
                    <img src={providerImg}/>
                </Link>
            </div>
        </div>
    )
}

export default RegistrationSwitcher;
