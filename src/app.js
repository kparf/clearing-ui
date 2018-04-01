import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import './app.scss';
import Content from './common/components/content/content';

class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/content" component={Content}/>
            </Router>
        );
    }
}

export default App;
