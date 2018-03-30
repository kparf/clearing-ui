import React from 'react';
import {
    Route,
    Link
} from 'react-router-dom';
import CleaningCompanyList from '../../admin/components/CleaningCompanyList';
import UserList from '../../admin/components/UserList';
import Header from './Header';

const Content = function({match}) {
    console.log(match);
    return (
        <div className="App">
            <Header/>
            <ul>
                <li>
                    <Link to={match.url + '/'}>Home</Link>
                </li>
                <li>
                    <Link to={match.url + "/users"}>Users</Link>
                </li>
                <li>
                    <Link to={match.url + "/cleaning-companies"}>Cleaning Companies</Link>
                </li>
            </ul>

            <Route path={match.path + "/users"} component={UserList}/>
            <Route path={match.path + "/cleaning-companies"} component={CleaningCompanyList}/>

        </div>
    );
};

export default Content;
