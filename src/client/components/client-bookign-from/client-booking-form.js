import React from 'react';
import './client-booking-form.css';
import Input from '../../../common/components/input/input';
import TextArea from '../../../common/components/textarea/textarea';
import Button from '../../../common/components/button/button';
import Title from '../../../common/components/title/title';
import { connect } from 'react-redux';
import { clientBookingFormChange } from '../../actions/sync';
import DataTimeListPicker from '../../../common/components/data-time-list-picker/data-time-list-picker';
import Checkbox from '../../../common/components/checkbox/checkbox';
import Select from '../../../common/components/select/select';

class ClientBookingForm extends React.Component {

    constructor(props) {
        super(props);
        this.calendarChangeHandler = this.calendarChangeHandler.bind(this);
        this.addressChangeHandler = this.addressChangeHandler.bind(this);
        this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.descriptionChangeHandler = this.descriptionChangeHandler.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
        this.isRecurrentChangeHandler = this.isRecurrentChangeHandler.bind(this);
        this.recurrentSelectionHandler = this.recurrentSelectionHandler.bind(this);
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

    isRecurrentChangeHandler(e) {
        this.props.dispatch(clientBookingFormChange({
            isRecurrent: e.target.checked
        }));
    }

    recurrentSelectionHandler(e) {
        this.props.dispatch(clientBookingFormChange({
            selectedRecurrentOption: e.target.value
        }));
    }

    submitHandler(e) {
        console.log("submit");
    }

    render() {

        const { form } = this.props;

        let isRecurrentSelectionDisabled = true;
        if ( form.isRecurrent ) {
            isRecurrentSelectionDisabled = false;
        }

        return (
            <div className='client-booking-from'>
                <Title label='BOOKING' comment='Looking for service? Please fill out the form.'/>

                <form role='form' className='client-booking-from__form' onSubmit={this.submitHandler}>
                    <Input label='Address' onChange={this.addressChangeHandler}/>
                    <TextArea label='Description' onChange={this.descriptionChangeHandler}/>

                    <DataTimeListPicker className='client-booking-from__data-time-picker'
                                        onChange={this.calendarChangeHandler}
                                        values={form.dataTimes}
                                        title='Expected Cleaning Time'
                    />

                    <div className='client-booking-from__recurrence'>
                        <Checkbox label='Recurrent cleaning'
                                  onChange={this.isRecurrentChangeHandler}
                                  checked={form.isRecurrent}/>
                        <Select onChange={this.recurrentSelectionHandler}
                                value={form.selectedRecurrentOption}
                                options={form.recurrentOptions} disabled={isRecurrentSelectionDisabled}/>
                    </div>

                    <Input label='Email' type='email' onChange={this.emailChangeHandler}/>
                    <Button type='button'>REGISTER</Button>
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
            isRecurrent: true,
            recurrentOptions: [
                {
                    value: 'WEEK',
                    label: 'Every Week'
                },
                {
                    value: '2_WEEK',
                    label: 'Every Two Weeks'
                },
                {
                    value: 'MONTH',
                    label: 'Every Month'
                }
            ],
            selectedRecurrentOption: 'WEEK',
            ...booking.form
        }
    }
}

export default connect(mapStateToProps)(ClientBookingForm);
