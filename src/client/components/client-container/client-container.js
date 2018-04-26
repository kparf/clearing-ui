import React from 'react';
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import ClientBookingForm from '../client-bookign-from/client-booking-form';

class ClientContainer extends React.Component {

    render() {
        const { match } = this.props;

        return (
            <div className='client-container'>
                <Switch>
                    <Route path={match.path + '/client-booking-from'} component={ClientBookingForm} />
                    <Route render={() => (<Redirect to={match.path + '/client-booking-from'}/>) } />
                </Switch>
            </div>
        )
    }
}

export default ClientContainer;
