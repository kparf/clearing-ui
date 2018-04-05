import { combineReducers } from 'redux';
import providerReducer from './provider/provider-reducer';
import commonReducer from './common/common-reducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    common: commonReducer,
    provider: providerReducer,
    routing: routerReducer
});

export default rootReducer;

