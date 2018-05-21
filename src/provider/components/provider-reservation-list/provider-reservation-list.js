import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import './provider-reservation-list.css';
import './_status/provider-reservation-list_status.css';
import { fetchProviderReservations } from '../../actions/async';
import ProviderReservationList__Filter from "./__filter/provider-reservation-list__filter";
import Title from "../../../common/components/title/title";
import { fetchServices } from "../../../common/actions/async";
import { providerReservationFilterChange } from "../../actions/sync";
import { push } from 'react-router-redux';

class ProviderReservationList extends React.Component{


    componentDidMount = () => {
        const { user, dispatch } = this.props;
        if (user.provider) {
            dispatch(fetchProviderReservations(user.provider));
            dispatch(fetchServices());
        }
    };

    componentDidUpdate = (prevProps) => {
        const { user, dispatch } = this.props;
        const prevUser = prevProps.user;
        if (user.provider !== prevUser.provider) {
            dispatch(fetchProviderReservations(user.provider));
            dispatch(fetchServices());
        }
    };

    onChangeHandler = ( changes ) => {
        const { user, dispatch } = this.props;
        dispatch((dispatch) => {
            dispatch(providerReservationFilterChange(changes));
            dispatch(fetchProviderReservations(user.provider));
        });
    };

    onSelectItemHandler = ( reservation ) => {
        this.props.dispatch( push(`reservation-details/${reservation.id}`));
    };

    render() {

        const { user, reservations, services, filter } = this.props;
        if (!user.provider) {
            return (
                <div className='provider-reservation-list'>
                    Error. Unable to load data.
                </div>
            )
        }

        const items = reservations.map((reservation) => {
            let servicesStr = '';
            if (reservation.services) {
                servicesStr = reservation.services.reduce((str, service) => `${str}, ${service}`);
            }

            const statusClasses = classNames({
                'provider-reservation-list_status-new' : reservation.status === 'NEW',
                'provider-reservation-list_status-confirmed': reservation.status === 'CONFIRMED',
                'provider-reservation-list_status-cancelled': reservation.status === 'CANCELLED'
            });

            return (
                <tr key={reservation.id} className="provider-reservation-list__item"
                    onClick={this.onSelectItemHandler.bind(this, reservation)}>
                    <td className={statusClasses}>{reservation.status}</td>
                    <td>{reservation.address}</td>
                    <td>{reservation.description}</td>
                    <td>{servicesStr}</td>
                </tr>
            );
        });

        return (
            <div className="provider-reservation-list">
                <Title label='RESERVATION LIST'/>
                <ProviderReservationList__Filter  onChange={this.onChangeHandler} services={services} filter={filter}/>
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
    const filter = state.provider.reservations.filter || {};
    const services = state.common.services.items || [];
    return {
        user,
        reservations,
        services,
        filter
    }
}

export default connect(mapStateToProps)(ProviderReservationList);
