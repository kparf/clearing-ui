import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import './provider-reservation-list.css';
import './_status/provider-reservation-list_status.css';
import { fetchProviderReservations } from '../../actions/async';
import MultiSelect from '../../../common/components/multi-select/multi-select';
import MultiSelect__ListItem
    from "../../../common/components/multi-select/multi-select__list-item/multi-select__list-item";

class ProviderReservationList extends React.Component{


    componentDidMount = () => {
        const { user, dispatch } = this.props;
        if (user.provider) {
            dispatch(fetchProviderReservations(user.provider));
        }
    };

    render() {

        const { user, reservations } = this.props;
        if (!user.provider) {
            return (
                <div className="provider-reservation-list">
                    Error. Unable to load data.
                    <MultiSelect onSave={(val) => {console.log(val)}}>
                        <MultiSelect__ListItem key='first1' value='first1' >First 1</MultiSelect__ListItem>
                        <MultiSelect__ListItem key='first2' value='first2' >First 2</MultiSelect__ListItem>
                        <MultiSelect__ListItem key='first3' value='first3' >First 3</MultiSelect__ListItem>
                        <MultiSelect__ListItem key='first4' value='first4' >First 4</MultiSelect__ListItem>
                        <MultiSelect__ListItem key='first5' value='first5' >First 5</MultiSelect__ListItem>
                    </MultiSelect>
                </div>
            )
        }

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
}

function mapStateToProps( state ) {
    const user = state.common.user;
    const reservations = state.provider.reservations.items || [];
    return {
        user,
        reservations
    }
}

export default connect(mapStateToProps)(ProviderReservationList);
