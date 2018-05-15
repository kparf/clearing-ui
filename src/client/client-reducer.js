import { combineReducers } from 'redux';
import {
    CLIENT_BOOKING_FROM_CHANGE,
    CLIENT_CONFIRM_RESERVATION_MODAL_OPEN,
    CLIENT_CONFIRM_RESERVATION_MODAL_CLOSE,
    CLIENT_AVAILABLE_PROVIDERS_REQUEST,
    CLIENT_AVAILABLE_PROVIDERS_FAIL,
    CLIENT_AVAILABLE_PROVIDERS_UPDATE_FILTER,
    CLIENT_FETCH_AVAILABLE_PROVIDERS,
    CLIENT_CONFIRM_RESERVATION_REQUEST,
    CLIENT_CONFIRM_RESERVATION_SUCCESS,
    CLIENT_CONFIRM_RESERVATION_FAIL
} from './actions/sync';

function bookingReducer(state = {
    form: {
        isRecurrent: false
    }
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
    open: false,
    isFetching: false
}, action) {
    switch (action.type) {
        case CLIENT_CONFIRM_RESERVATION_MODAL_OPEN:
            return {
                ...state,
                provider: action.provider,
                open: true
            };
        case CLIENT_CONFIRM_RESERVATION_MODAL_CLOSE:
            return {
                ...state,
                open: false
            };
        case CLIENT_CONFIRM_RESERVATION_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case CLIENT_CONFIRM_RESERVATION_SUCCESS:
            return {
                ...state,
                isFetching: false
            };
        case CLIENT_CONFIRM_RESERVATION_FAIL:
            return {
                ...state,
                isFetching: false
            };
        default:
            return state;
    }
}

function availableProvidersReducer( state = {
    filter: {},
    providers: [],
    isFetching: false
}, action) {
    switch (action.type) {
        case CLIENT_AVAILABLE_PROVIDERS_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case CLIENT_AVAILABLE_PROVIDERS_FAIL:
            return {
                ...state,
                isFetching: false
            };
        case CLIENT_FETCH_AVAILABLE_PROVIDERS:
            return {
                ...state,
                providers: action.providers,
                isFetching: false
            };
        case CLIENT_AVAILABLE_PROVIDERS_UPDATE_FILTER:
            return {
                ...state,
                filter: action.filter
            };
        default:
            return state;
    }
}

const clientReducer = combineReducers({
    booking: bookingReducer,
    confirmReservation: confirmReservationReducer,
    availableProviders: availableProvidersReducer
});

export default clientReducer;
