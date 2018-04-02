import React from 'react';
import reservations from './reservations.json'
import './provider-reservation-list.css';

function ProviderReservationList() {

    const items = reservations.map((reservation) => {
        let servicesStr = '';
        if (reservation.services) {
            servicesStr = reservation.services.reduce((str, service) => `${str}, ${service}`);
        }

        return (
            <tr className="provider-reservation-list__item">
                <td>{reservation.status}</td>
                <td>{reservation.address}</td>
                <td>{reservation.description}</td>
                <td>{servicesStr}</td>
            </tr>
        );
    });

    return (
        <div className="provider-reservation-list">
            <table>
                <tr>
                    <th>STATUS</th>
                    <th>ADDRESS</th>
                    <th>DESCRIPTION</th>
                    <th>SERVICES</th>
                </tr>
                {items}
            </table>
        </div>
    );
}

export default ProviderReservationList;
