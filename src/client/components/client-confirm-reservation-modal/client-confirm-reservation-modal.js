import React from 'react';
import Modal from '../../../common/components/modal/modal';
import ClientConfirmReservationModal__Item
    from './client-confirm-reservation-modal__item/client-confirm-reservation-modal__item';
import Button from '../../../common/components/button/button';
import { connect } from 'react-redux';
import { clientConfirmReservationModalClose } from "../../actions/sync";
import './client-confirm-reservation-modal.css';

class ClientConfirmReservationModal extends React.Component{


    cancelHandler = (event) => {
        this.props.dispatch(clientConfirmReservationModalClose());
    };

    render() {

        let fields = [];
        if (this.props.open) {
            fields = this.generateFieldItems(this.props);
        }

        return (
            <Modal className='client-confirm-reservation-modal modal_open'
                title='CONFIRM RESERVATION' open={this.props.open}>
                { fields }
                <div className='client-confirm-reservation-modal__actions'>
                    <Button onClick={this.cancelHandler}>CANCEL</Button>
                    <Button>CONFIRM ></Button>
                </div>
            </Modal>
        )
    }

    generateFieldItems = (props) => {
        const {
            address,
            services,
            description,
            dateTimes,
            isRecurrent,
            selectedRecurrentOption,
            provider
        } = props;

        let serviceList = '';
        if (services) {
            serviceList = services.join(', ');
        }

        let dateTimeList = '';
        if (dateTimes) {
            dateTimeList = dateTimes.join(', ');
        }

        let orderFields = [
            {
                label: 'ADDRESS',
                data: address
            },
            {
                label: 'SERVICES',
                data: serviceList
            },
            {
                label: 'DESCRIPTION',
                data: description
            },
            {
                label: 'CLEANING TIMES',
                data: dateTimeList
            }
        ];

        if(isRecurrent) {
            orderFields.push({
                label: 'PLANNED RECURRENT',
                data: selectedRecurrentOption
            })
        }

        if(provider) {
            orderFields.push({
                label: 'COMPANY NAME',
                data: provider.name
            },)
        }

        orderFields = orderFields.concat([
            {
                label: 'PRICE',
                data: '***'
            },
            {
                label: 'EXPECTED CLEAN UP TIME',
                data: 'same time'
            }
        ]);

        return orderFields.map(field => (
            <ClientConfirmReservationModal__Item
                key={field.label}
                label={field.label}
                data={field.data} />
        ));


    }
}

function mapStateToProp(state) {
    const form = state.client.booking.form;
    return {
        open: state.client.confirmReservation.open,
        provider: state.client.confirmReservation.provider,

        address: form.address,
        description: form.description,
        dateTimes: form.dateTimes,
        isRecurrent: form.isRecurrent,
        selectedRecurrentOption: form.selectedRecurrentOption,
        services: form.services,
        email: form.email
    }
}

export default connect(mapStateToProp)(ClientConfirmReservationModal);
