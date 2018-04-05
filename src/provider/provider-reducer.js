import { combineReducers } from 'redux';

function reservations(state = {
    isFetching: false,
    items: []
}, action) {
    return state;
}

const providerReducer = combineReducers({
    reservations
});

export default providerReducer;

