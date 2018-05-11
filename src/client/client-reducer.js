import { combineReducers } from 'redux';
import {
    CLIENT_BOOKING_FROM_CHANGE,
    CLIENT_CONFIRM_RESERVATION_MODAL_OPEN,
    CLIENT_CONFIRM_RESERVATION_MODAL_CLOSE
} from './actions/sync';

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

function confirmReservationReducer( state = {
    form: {},
    open: false
}, action) {
    switch (action.type) {
        case CLIENT_CONFIRM_RESERVATION_MODAL_OPEN:
            return {
                ...state,
                open: true
            };
        case CLIENT_CONFIRM_RESERVATION_MODAL_CLOSE:
            return {
                ...state,
                open: false
            };
        default:
            return state;
    }
}

const clientReducer = combineReducers({
    booking: bookingReducer,
    confirmReservation: confirmReservationReducer
});

export default clientReducer;
