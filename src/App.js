import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import UserList from './admin/components/UserList';
import CleaningCompanyList from './admin/components/CleaningCompanyList';

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h1 className="App-title">Welcome to React</h1>
                    </header>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/users">Users</Link>
                        </li>
                        <li>
                            <Link to="/cleaning-companies">Cleaning Companies</Link>
                        </li>
                    </ul>

                    <Route path="/users" component={UserList}/>
                    <Route path="/cleaning-companies" component={CleaningCompanyList}/>

                </div>
            </Router>
        );
    }
}

export default App;
