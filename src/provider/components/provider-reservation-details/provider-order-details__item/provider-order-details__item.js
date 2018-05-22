import React from 'react';
import './provider-order-details__item.css';

function ProviderReservationDetails__Item({label, data}) {
    return (
        <div className='provider-reservation-details__item'>
            <span className='provider-reservation-details__item-label'>{label}</span>
            :
            <span className='provider-reservation-details__item-data'>{data}</span>
        </div>
    );
}

export default ProviderReservationDetails__Item;
