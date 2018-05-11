import React from 'react';
import './client-confirm-reservation-modal__item.css';

function ClientConfirmReservationModal__Item({  label, data }) {
    return (
        <div className='client-confirm-reservation-modal__item'>
            <span className='client-confirm-reservation-modal__item-label'>{ label }</span>:
            <span className='client-confirm-reservation-modal__item-data'>{ data }</span>
        </div>
    )
}

export default ClientConfirmReservationModal__Item;
