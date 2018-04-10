import { combineReducers } from 'redux';
import {
    PROVIDER_REGISTRATION_FROM_CHANGE,
    PROVIDER_REGISTRATION_SUCCESS,
    PROVIDER_REGISTRATION_FAIL,
    PROVIDER_REGISTRATION_CLEAR_STATUS,
    PROVIDER_REGISTRATION_REQUEST
} from "./actions/sync";

function reservationReducer(state = {
    isFetching: false,
    items: []
}, action) {
    return state;
}

function registrationReducer(state = {
    form: {},
    isProviderRegistrationSuccess: false,
    isProviderRegistrationFail: false,
    isFetching: false
}, action) {
    switch (action.type) {
        case PROVIDER_REGISTRATION_FROM_CHANGE:
            return {
                ...state,
                form: {
                    ...state.form,
                    ...action.form
                }
            };
        case PROVIDER_REGISTRATION_REQUEST:
            return {
                ...state,
                isProviderRegistrationSuccess: false,
                isProviderRegistrationFail: false,
                isFetching: true
            };
        case PROVIDER_REGISTRATION_SUCCESS:
            return {
                ...state,
                form: {},
                isProviderRegistrationSuccess: true,
                isProviderRegistrationFail: false,
                isFetching: false
            };
        case PROVIDER_REGISTRATION_FAIL:
            return {
                ...state,
                isProviderRegistrationSuccess: false,
                isProviderRegistrationFail: true,
                isFetching: false
            };
        case PROVIDER_REGISTRATION_CLEAR_STATUS:
            return {
                ...state,
                isProviderRegistrationSuccess: false,
                isProviderRegistrationFail: false,
                isFetching: false
            };
        default:
            return state;
    }
}

const providerReducer = combineReducers({
    reservations: reservationReducer,
    registration: registrationReducer
});

export default providerReducer;

