import React from 'react';
import {
    Route,
    Link,
    Switch
} from 'react-router-dom';
import Header from '../../../common/components/header/header'
import ProviderCalendar from "../provider-calendar/provider-calendar";
import ProviderOrderDetails from "../provider-order-details/provider-order-details";
import ProviderReservationList from "../provider-reservation-list/provider-reservation-list";
import ProviderProfileEdit from "../provider-profile-edit/provider-profile-edit";
import ProviderRegistration from "../provider-registration/provider-registration";
import ProviderSchedule from "../provider-schedule/provider-schedule";

import relativeMenuList from "./menu";
import ProviderRegistrationConfirmation from "../provider-registration-confirmation/provider-registration-confirmation";

class ProviderContainer extends React.Component {
    render() {
        let { match } = this.props;
        let absoluteMenuList = relativeMenuList.map( ({name, link}) => {
            return {
                name,
                link: match.url + link
            }
        });

        return (
            <div className="provider-container">
                <Header menu={absoluteMenuList}/>
                <Switch>
                    <Route path={match.path + '/calendar'} component={ProviderCalendar}/>
                    <Route path={match.path + '/order-details'} component={ProviderOrderDetails}/>
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
