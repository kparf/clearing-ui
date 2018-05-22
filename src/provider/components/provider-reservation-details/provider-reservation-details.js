import React from 'react';
import './provider-reservation-details.css';
import {fetchReservationDetails, providerConfirmReservation} from "../../actions/async";
import { connect } from 'react-redux';
import ProviderReservationDetails__Item from './provider-order-details__item/provider-order-details__item';
import Button from "../../../common/components/button/button";
import Title from "../../../common/components/title/title";

class ProviderReservationDetails extends React.Component {

    componentDidMount() {
        const { match, dispatch } = this.props;
        dispatch(fetchReservationDetails(match.params.id));
    }

    cancelHandler = () => {

    };

    confirmHandler = () => {
        const { dispatch, reservation } = this.props;
        dispatch(providerConfirmReservation(reservation.id));
    };

    render() {
        const { match, reservation } = this.props;
        let serviceList = '';
        if(reservation.services) {
            serviceList = reservation.services.join(',');
        }

        return (
            <div className='provider-reservation-details'>
                <Title label='RESERVATION DETAILS'/>
                <ProviderReservationDetails__Item label='Email' data={reservation.userEmail}/>
                <ProviderReservationDetails__Item label='Address' data={reservation.address}/>
                <ProviderReservationDetails__Item label='Description' data={reservation.description}/>
                <ProviderReservationDetails__Item label='Services' data={serviceList}/>
                <div className='client-confirm-reservation-modal__actions'>
                    <Button onClick={this.cancelHandler}>CANCEL</Button>
                    <Button onClick={this.confirmHandler}>CONFIRM ></Button>
                </div>
            </div>
        )
    }
}

function mapStateToProps( state ) {
    return {
        reservation: state.provider.reservationDetails
    }
}

export default connect(mapStateToProps)(ProviderReservationDetails);
