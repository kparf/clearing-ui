import React from 'react';
import './provider-registration__services.css';
import Checkbox from '../../../../common/components/checkbox/checkbox';

function ProviderRegistration__Services({ label, services }) {

    const serviceRadioButtons = services.map(service => {
        return (
            <Checkbox key={service.id}
                      name="service"
                      label={service.name}
                      value={service.id}/>
        )
    });

    return (
        <fieldset className="provider-registration__services">
            <legend>{label}</legend>
            {serviceRadioButtons}
        </fieldset>
    );
}

export default ProviderRegistration__Services;
