import React from 'react';
import ProviderRegistration__Form from './__form/provider-registration__form'
import ProviderRegistration__Title from './__title/provider-registration__title';
import './provider-registration.css';

function ProviderRegistration() {
    return (
        <div className="provider-registration">
            <ProviderRegistration__Title/>
            <ProviderRegistration__Form/>
        </div>
    );
};

export default ProviderRegistration;
