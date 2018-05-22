import React from 'react';
import './provider-reservation-details.css';
import {fetchReservationDetails, providerCancelReservation, providerConfirmReservation} from "../../actions/async";
import { connect } from 'react-redux';
import ProviderReservationDetails__Item from './provider-order-details__item/provider-order-details__item';
import Button from "../../../common/components/button/button";
import Title from "../../../common/components/title/title";
import {
    providerReservationDetailsCancelCommentChange
} from "../../actions/sync";
import TextArea from "../../../common/components/textarea/textarea";

class ProviderReservationDetails extends React.Component {

    componentDidMount() {
        const { match, dispatch } = this.props;
        dispatch(fetchReservationDetails(match.params.id));
    }

    cancelHandler = () => {
        this.props.dispatch(providerReservationDetailsCancelCommentChange(true));
    };

    confirmHandler = () => {
        const { dispatch, reservation } = this.props;
        dispatch(providerConfirmReservation(reservation.id));
    };

    confirmCancelHandler = () => {
        this.props.dispatch(providerCancelReservation());
    };

    abortCancelHandler = () => {
        this.props.dispatch(providerReservationDetailsCancelCommentChange(false, ''));
    };

    cancelCommentChangeHandler = (e) => {
        this.props.dispatch(providerReservationDetailsCancelCommentChange(true, e.currentTarget.value));
    };

    render() {
        const { match, reservation, cancelComment } = this.props;
        let serviceList = '';
        if(reservation.services) {
            serviceList = reservation.services.join(',');
        }

        const actionSection = this.generateActionSection(reservation, cancelComment);

        return (
            <div className='provider-reservation-details'>
                <Title label='RESERVATION DETAILS'/>
                <ProviderReservationDetails__Item label='Status' data={reservation.status}/>
                <ProviderReservationDetails__Item label='Email' data={reservation.userEmail}/>
                <ProviderReservationDetails__Item label='Address' data={reservation.address}/>
                <ProviderReservationDetails__Item label='Description' data={reservation.description}/>
                <ProviderReservationDetails__Item label='Services' data={serviceList}/>

                { actionSection }
            </div>
        )
    }

    generateActionSection = (reservation, cancelComment) => {

        if (cancelComment.open) {
            return (
                <div className='provider-reservation-details__actions'>
                    <TextArea
                        className='provider-reservation-details__comment'
                        label='Comment'
                        onChange={this.cancelCommentChangeHandler}
                        value={cancelComment.value}
                    />
                    <Button onClick={this.confirmCancelHandler}>CONFIRM CANCEL</Button>
                    <Button onClick={this.abortCancelHandler}>ABORT CANCEL</Button>
                </div>
            );
        }

        if (reservation.status === 'NEW') {
            return (
                <div className='provider-reservation-details__actions'>
                    <Button onClick={this.confirmHandler}>CONFIRM ></Button>
                    <Button onClick={this.cancelHandler}>CANCEL</Button>
                </div>
            );
        }

        if (reservation.status === 'CONFIRMED') {
            return (
                <div className='provider-reservation-details__actions'>
                    <Button onClick={this.cancelHandler}>CANCEL</Button>
                </div>
            );
        }

        return false;
    }
}

function mapStateToProps( state ) {
    return {
        reservation: state.provider.reservationDetails,
        cancelComment: state.provider.reservationDetails.cancelComment
    }
}

export default connect(mapStateToProps)(ProviderReservationDetails);
