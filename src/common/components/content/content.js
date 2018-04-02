import React from 'react';
import {
    Route,
    Link
} from 'react-router-dom';
import CleaningCompanyList from '../../../admin/components/cleaning-company-list/cleaning-company-list';
import UserList from '../../../admin/components/user-list/user-list';
import Header from '../header/header';
import ProviderContainer from "../../../provider/components/provider-container";

const Content = function({match}) {
    return (
        <div className="App">
            <Header/>
            <ul>
                <li><Link to={match.url + '/'}>Home</Link></li>
                <li><Link to={match.url + '/users'}>Users</Link></li>
                <li><Link to={match.url + '/cleaning-companies'}>Cleaning Companies</Link></li>
                <li><Link to={match.url + '/provider'}>Provider</Link></li>
            </ul>

            <Route path={match.path + '/users'} component={UserList}/>
            <Route path={match.path + '/cleaning-companies'} component={CleaningCompanyList}/>
            <Route path={match.path + '/provider'} component={ProviderContainer}/>

        </div>
    );
};

export default Content;
