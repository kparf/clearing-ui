import React from 'react';
import {
    Route,
    Switch
} from 'react-router-dom';
import ProviderCalendar from '../provider-calendar/provider-calendar';
import ProviderReservationDetails from '../provider-reservation-details/provider-reservation-details';
import ProviderReservationList from '../provider-reservation-list/provider-reservation-list';
import ProviderProfileEdit from '../provider-profile-edit/provider-profile-edit';
import ProviderRegistration from '../provider-registration/provider-registration';
import ProviderSchedule from '../provider-schedule/provider-schedule';
import ProviderRegistrationConfirmation from '../provider-registration-confirmation/provider-registration-confirmation';

class ProviderContainer extends React.Component {
    render() {
        const { match } = this.props;

        return (
            <div className="provider-container">
                <Switch>
                    <Route path={match.path + '/calendar'} component={ProviderCalendar}/>
                    <Route path={match.path + '/reservation-details'} component={ProviderReservationDetails}/>
                    <Route path={match.path + '/reservation-list'} component={ProviderReservationList}/>
                    <Route path={match.path + '/profile-edit'} component={ProviderProfileEdit}/>
                    <Route path={match.path + '/registration/confirmation/:verificationKey'} component={ProviderRegistrationConfirmation}/>
                    <Route path={match.path + '/registration/confirmation'} component={ProviderRegistrationConfirmation}/>
                    <Route path={match.path + '/registration'} component={ProviderRegistration}/>
                    <Route path={match.path + '/schedule'} component={ProviderSchedule}/>
                </Switch>
            </div>
        )
    }
}

export default ProviderContainer;
