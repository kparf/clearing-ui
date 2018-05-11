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

        const orderFields = [
            {
                label: 'ADDRESS',
                data: 'Test Address'
            },
            {
                label: 'SERVICES',
                data: 'Service 1, Service 2'
            },
            {
                label: 'DESCRIPTION',
                data: 'Test Description'
            },
            {
                label: 'CLEANING TIMES',
                date: 'Same date'
            },
            {
                label: 'RECURRENT CLEANING',
                date: 'Every Week'
            },
            {
                label: 'COMPANY NAME',
                data: 'TEST COMPANY NAME'
            },
            {
                label: 'PRICE',
                data: '***'
            },
            {
                label: 'EXPECTED CLEAN UP TIME',
                data: 'same time'
            }
        ];

        const fields = orderFields.map(field => (
            <ClientConfirmReservationModal__Item
                key={field.label}
                label={field.label}
                data={field.data} />
        ));

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
}

function mapStateToProp(state) {
    return {
        open: state.client.confirmReservation.open
    }
}

export default connect(mapStateToProp)(ClientConfirmReservationModal);
