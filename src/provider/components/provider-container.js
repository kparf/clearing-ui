import React from 'react';
import {
    Route,
    Link
} from 'react-router-dom';
import ProviderCalendar from "./provider-calendar/provider-calendar";
import ProviderOrderDetails from "./provider-order-details/provider-order-details";
import ProviderOrderList from "./provider-order-list/provider-order-list";
import ProviderProfileEdit from "./provider-profile-edit/provider-profile-edit";
import ProviderRegistration from "./provider-registration/provider-registration";
import ProviderSchedule from "./provider-schedule/provider-schedule";

function ProviderContainer({match}) {
    return (
        <div className="provider-container">

            <ul>
                <li><Link to={match.url}>Home</Link></li>
                <li><Link to={match.url + '/calendar'}>Calendar</Link></li>
                <li><Link to={match.url + '/order-details'}>Order Details</Link></li>
                <li><Link to={match.url + '/order-list'}>Order List</Link></li>
                <li><Link to={match.url + '/order-profile-edit'}>Order Profile Edit</Link></li>
                <li><Link to={match.url + '/registration'}>Registration</Link></li>
                <li><Link to={match.url + '/schedule'}>Schedule</Link></li>
            </ul>

            <Route path={match.path + '/calendar'} component={ProviderCalendar}/>
            <Route path={match.path + '/order-details'} component={ProviderOrderDetails}/>
            <Route path={match.path + '/order-list'} component={ProviderOrderList}/>
            <Route path={match.path + '/order-profile-edit'} component={ProviderProfileEdit}/>
            <Route path={match.path + '/registration'} component={ProviderRegistration}/>
            <Route path={match.path + '/schedule'} component={ProviderSchedule}/>
        </div>
    )
}

export default ProviderContainer;
