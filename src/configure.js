import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger';
import rootReducer from './root-reducer';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory'

const loggerMiddleware = createLogger();
export const history = createHistory();

export default function configure(preLoadedState) {
    return {
        store: createStore(
            rootReducer,
            preLoadedState,
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware,
                routerMiddleware(history)
            )
        ),
        history
    }
}
