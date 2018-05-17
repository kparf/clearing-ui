import React from 'react';
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom';
import './app.css';
import Content from '../common/components/content/content';
import { ConnectedRouter } from 'react-router-redux';
import { authenticationRestore } from "../auth/actions/async";

class App extends React.Component {

    componentDidMount() {
        this.props.store.dispatch(authenticationRestore());
    }

    render() {
        const { store, history } = this.props;

        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Route path="/content" component={Content}/>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;
