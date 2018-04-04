import { combineReducers } from 'redux';
import providerReducer from './provider/provider-reducer';

const rootReducer = combineReducers({
    provider : providerReducer
});

export default rootReducer;

