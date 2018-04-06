import React from 'react';
import './provider-registration__form.css';
import Input from '../../../../common/components/input/input';
import TextArea from '../../../../common/components/textarea/textarea';
import Button from '../../../../common/components/button/button';
import ProviderRegistration__Services from '../__services/provider-registration__services';

function ProviderRegistration__Form({ services }) {
    return (
        <form role="form" className='provider-registration__form'>
            <fieldset>
                <Input label='Logo' type='file'/>
                <Input label='Email' type='email'/>
                <Input label='Name'/>
                <Input label='Address'/>
                <TextArea label='Description'/>

                <ProviderRegistration__Services label='Services' services={services}/>

                <Input label='Password' type='password'/>
                <Input label='Repeat Password' type='password'/>
                <Button>REGISTER</Button>
            </fieldset>
        </form>
    )
}

export default ProviderRegistration__Form;
