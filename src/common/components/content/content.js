import React from 'react';
import {
    Route,
    Link
} from 'react-router-dom';
import CleaningCompanyList from '../../../admin/components/cleaning-company-list/cleaning-company-list';
import UserList from '../../../admin/components/user-list/user-list';
import ProviderContainer from "../../../provider/components/provider-container/provider-container";
import ClientContainer from "../../../client/components/client-container/client-container";
import Header from "../header/header";
import Login from "../../../auth/components/login/login";
import RegistrationSwitcher from "../../../auth/components/registration-switcher/registration-switcher";

import './content.css';

const Content = function({match}) {

    return (
        <div className="content">
            <Header/>
            <Route path={match.path + '/users'} component={UserList}/>
            <Route path={match.path + '/cleaning-companies'} component={CleaningCompanyList}/>
            <Route path={match.path + '/provider'} component={ProviderContainer}/>
            <Route path={match.path + '/login'} component={Login}/>
            <Route path={match.path + '/registration'} component={RegistrationSwitcher}/>
            <Route path={match.path + '/client'} component={ClientContainer}/>
        </div>
    );
};

export default Content;
