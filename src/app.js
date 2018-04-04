import React, { Component } from 'react';
import { Provider } from 'react-redux'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';
import './app.css';
import Content from './common/components/content/content';

function App({store}) {
    return (
        <Provider store={store}>
            <Router>
                <Route path="/content" component={Content}/>
            </Router>
        </Provider>
    );
}

export default App;
