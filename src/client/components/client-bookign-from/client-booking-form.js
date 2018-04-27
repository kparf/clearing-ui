import React from 'react';
import './client-booking-form.css';
import Input from '../../../common/components/input/input';
import TextArea from '../../../common/components/textarea/textarea';
import Button from '../../../common/components/button/button';
import Title from '../../../common/components/title/title';
import { connect } from 'react-redux';
import { clientBookingFormChange } from "../../actions/sync";
import DataTimeListPicker from '../../../common/components/data-time-list-picker/data-time-list-picker';

class ClientBookingForm extends React.Component {

    constructor(props) {
        super(props);
        this.calendarChangeHandler = this.calendarChangeHandler.bind(this);
        this.addressChangeHandler = this.addressChangeHandler.bind(this);
        this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.descriptionChangeHandler = this.descriptionChangeHandler.bind(this);
    }

    calendarChangeHandler(dataTimes) {
        this.props.dispatch(clientBookingFormChange({
            dataTimes
        }));
    }

    addressChangeHandler(e) {
        this.props.dispatch(clientBookingFormChange({
            address: e.currentTarget.value
        }));
    }

    emailChangeHandler(e) {
        this.props.dispatch(clientBookingFormChange({
            email: e.currentTarget.value
        }));
    }

    descriptionChangeHandler(e) {
        this.props.dispatch(clientBookingFormChange({
            description: e.currentTarget.value
        }));
    }


    render() {

        const { form } = this.props;

        return (
            <div className='client-booking-from'>
                <Title label='BOOKING' comment='Looking for service? Please fill out the form.'/>

                <form role='form' className='client-booking-from__form'>
                    <Input label='Address' onChange={this.addressChangeHandler}/>
                    <TextArea label='Description' onChange={this.descriptionChangeHandler}/>

                    <DataTimeListPicker className='client-booking-from__data-time-picker'
                                        onChange={this.calendarChangeHandler} values={form.dataTimes}/>

                    <Input label='Email' type='email' onChange={this.emailChangeHandler}/>
                    <Button type='submit'>REGISTER</Button>
                </form>
            </div>
        )
    }
}

function mapStateToProps(state) {

    const booking = state.client ? state.client.booking: {};
    return {
        form: {
            email: '',
            address: '',
            description: '',
            dataTimes: [],
            ...booking.form
        }
    }
}

export default connect(mapStateToProps)(ClientBookingForm);
