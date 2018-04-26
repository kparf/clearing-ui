import React from 'react';
import './client-booking-form.css';
import Input from '../../../common/components/input/input';
import TextArea from '../../../common/components/textarea/textarea';
import Button from '../../../common/components/button/button';
import Title from '../../../common/components/title/title';

class ClientBookingForm extends React.Component {

    render() {
        return (
            <div className='client-booking-from'>
                <Title label='BOOKING' comment='Looking for service? Please fill out the form.'/>

                <form tole='form' className='client-booking-from__form'>
                    <Input label='Address'/>
                    <TextArea label='Description'/>
                    <Input label='Email' type='email'/>
                    <Button type='submit'>REGISTER</Button>
                </form>
            </div>
        )
    }
}

export default ClientBookingForm;
