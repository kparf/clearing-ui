import React from 'react';
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom';
import './app.css';
import Content from '../common/components/content/content';
import { ConnectedRouter } from 'react-router-redux';

function App({ store, history }) {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <Route path="/content" component={Content}/>
            </ConnectedRouter>
        </Provider>
    );
}

export default App;
