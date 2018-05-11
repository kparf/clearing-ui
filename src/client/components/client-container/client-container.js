// @flow
import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import ClientBookingForm from '../client-bookign-from/client-booking-form';
import ClientAvailableProviders from "../client-available-providers/client-available-providers";
import ClientConfirmReservationModal from "../client-confirm-reservation-modal/client-confirm-reservation-modal";

type Props = {
    match: any
}

class ClientContainer extends React.Component<Props> {

    render() {
        const { match } = this.props;

        return (
            <div className='client-container'>
                <Switch>
                    <Route path={match.path + '/client-booking-from'} component={ClientBookingForm} />
                    <Route path={match.path + '/client-available-providers'} component={ClientAvailableProviders} />
                    <Route render={() => (<Redirect to={match.path + '/client-booking-from'}/>) } />
                </Switch>
                <ClientConfirmReservationModal />
            </div>
        )
    }
}

export default ClientContainer;
