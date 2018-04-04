import { combineReducers } from 'redux';
import {
    REQUEST_SERVICES,
    RECEIVE_SERVICES
} from "../actions";

function services(state = {
    isFetching: false,
    items: []
}, action) {
    switch (action.type) {
        case REQUEST_SERVICES:
            return Object.assign({}, state, {
                isFetching: true
            });
        case RECEIVE_SERVICES:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.data
        });
        default:
            return state;
    }
}

const providerReducer = combineReducers({
    services
});

export default providerReducer;

