import { combineReducers } from 'redux';
import { CLIENT_BOOKING_FROM_CHANGE } from './actions/sync';

function bookingReducer(state = {
    form: {}
}, action) {
    switch (action.type) {
        case CLIENT_BOOKING_FROM_CHANGE:
            return {
                ...state,
                form: {
                    ...state.form,
                    ...action.form
                }
            };
        default:
            return state;
    }
}

const clientReducer = combineReducers({
    booking: bookingReducer
});

export default clientReducer;
