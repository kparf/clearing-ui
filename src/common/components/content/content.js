import React from 'react';
import {
    Route,
    Link
} from 'react-router-dom';
import CleaningCompanyList from '../../../admin/components/cleaning-company-list/cleaning-company-list';
import UserList from '../../../admin/components/user-list/user-list';
import ProviderContainer from "../../../provider/components/provider-container/provider-container";

const Content = function({match}) {
    return (
        <div className="content">
            <Route path={match.path + '/users'} component={UserList}/>
            <Route path={match.path + '/cleaning-companies'} component={CleaningCompanyList}/>
            <Route path={match.path + '/provider'} component={ProviderContainer}/>

            <ul>
                <li><Link to={match.url + '/'}>Home</Link></li>
                <li><Link to={match.url + '/users'}>Users</Link></li>
                <li><Link to={match.url + '/cleaning-companies'}>Cleaning Companies</Link></li>
                <li><Link to={match.url + '/provider'}>Provider</Link></li>
            </ul>
        </div>
    );
};

export default Content;
