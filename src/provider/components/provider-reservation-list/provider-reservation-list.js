import React from 'react';
import classNames from 'classnames';
import reservations from './reservations.json'
import './provider-reservation-list.css';
import './_status/provider-reservation-list_status.css';

function ProviderReservationList() {

    const items = reservations.map((reservation) => {
        let servicesStr = '';
        if (reservation.services) {
            servicesStr = reservation.services.reduce((str, service) => `${str}, ${service}`);
        }

        const statusClasses = classNames({
            "provider-reservation-list_status-new" : reservation.status === "NEW",
            "provider-reservation-list_status-confirmed": reservation.status === "CONFIRMED",
            "provider-reservation-list_status-cancelled": reservation.status === "CANCELLED"
        });

        return (
            <tr key={reservation.id} className="provider-reservation-list__item">
                <td className={statusClasses}>{reservation.status}</td>
                <td>{reservation.address}</td>
                <td>{reservation.description}</td>
                <td>{servicesStr}</td>
            </tr>
        );
    });

    return (
        <div className="provider-reservation-list">
            <table>
                <thead>
                    <tr>
                        <th>STATUS</th>
                        <th>ADDRESS</th>
                        <th>DESCRIPTION</th>
                        <th>SERVICES</th>
                    </tr>
                </thead>
                <tbody>
                    {items}
                </tbody>
            </table>
        </div>
    );
}

export default ProviderReservationList;
