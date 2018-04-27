import { combineReducers } from 'redux';
import providerReducer from './provider/provider-reducer';
import commonReducer from './common/common-reducer';
import { routerReducer } from 'react-router-redux';
import clientReducer from "./client/client-reducer";

const rootReducer = combineReducers({
    common: commonReducer,
    provider: providerReducer,
    client: clientReducer,
    routing: routerReducer
});

export default rootReducer;

