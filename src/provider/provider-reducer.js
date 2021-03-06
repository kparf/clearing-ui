import { combineReducers } from 'redux';
import {
    PROVIDER_REGISTRATION_FROM_CHANGE,
    PROVIDER_REGISTRATION_SUCCESS,
    PROVIDER_REGISTRATION_FAIL,
    PROVIDER_REGISTRATION_CLEAR_STATUS,
    PROVIDER_REGISTRATION_REQUEST,
    PROVIDER_VERIFICATION_REQUEST,
    PROVIDER_VERIFICATION_SUCCESS,
    PROVIDER_VERIFICATION_FAIL,
    PROVIDER_RESERVATION_LIST_REQUEST,
    PROVIDER_RESERVATION_LIST_SUCCESS,
    PROVIDER_RESERVATION_LIST_FAIL,
    PROVIDER_RESERVATION_FILTER_CHANGE,
    PROVIDER_RESERVATION_DETAILS_REQUEST,
    PROVIDER_RESERVATION_DETAILS_SUCCESS,
    PROVIDER_RESERVATION_DETAILS_FAIL,
    PROVIDER_RESERVATION_DETAILS_CONFIRM,
    PROVIDER_RESERVATION_DETAILS_CANCEL,
    PROVIDER_RESERVATION_DETAILS_CANCEL_SUCCESS,
    PROVIDER_RESERVATION_DETAILS_CANCEL_FAIL,
    PROVIDER_RESERVATION_DETAILS_CONFIRM_SUCCESS,
    PROVIDER_RESERVATION_DETAILS_CONFIRM_FAIL,
    PROVIDER_RESERVATION_DETAILS_COMMENT_CHANGE
} from "./actions/sync";

function reservationDetailsRouter(state = {
    cancelComment: {
        open: false
    }
}, action) {
    switch(action.type) {
        case PROVIDER_RESERVATION_DETAILS_COMMENT_CHANGE: {
            return {
                ...state,
                cancelComment: {
                    open: action.open,
                    value: action.value
                }
            }
        }
        case PROVIDER_RESERVATION_DETAILS_CONFIRM_SUCCESS: {
            return {
                ...state,
                ...action.reservation,
                isFetching: false
            }
        }
        case PROVIDER_RESERVATION_DETAILS_CONFIRM_FAIL: {
            return {
                ...state,
                isFetching: false
            }
        }
        case PROVIDER_RESERVATION_DETAILS_CANCEL_SUCCESS: {
            return {
                ...state,
                ...action.reservation,
                isFetching: false
            }
        }
        case PROVIDER_RESERVATION_DETAILS_CANCEL_FAIL: {
            return {
                ...state,
                isFetching: false
            }
        }
        case PROVIDER_RESERVATION_DETAILS_CONFIRM: {
            return {
                ...state,
                isFetching: true
            }
        }
        case PROVIDER_RESERVATION_DETAILS_CANCEL: {
            return {
                ...state,
                isFetching: true
            }
        }
        case PROVIDER_RESERVATION_DETAILS_REQUEST: {
            return {
                ...state,
                isFetching: true
            }
        }
        case PROVIDER_RESERVATION_DETAILS_SUCCESS: {
            return {
                ...state,
                ...action.reservation,
                isFetching: false,
            }
        }
        case PROVIDER_RESERVATION_DETAILS_FAIL: {
            return {
                ...state,
                isFetching: false
            }
        }
        default:
            return state;
    }
}

function reservationReducer(state = {
    isFetching: false,
    items: [],
    filter: {
        services: [],
        statuses: []
    }
}, action) {
    switch (action.type) {
        case PROVIDER_RESERVATION_LIST_REQUEST:
            return {
                ...state,
                isFetching: true
            };
        case PROVIDER_RESERVATION_LIST_SUCCESS:
            return {
                ...state,
                items: action.reservations
            };
        case PROVIDER_RESERVATION_LIST_FAIL:
            return {
                ...state
            };
        case PROVIDER_RESERVATION_FILTER_CHANGE:
            return {
                ...state,
                filter: {
                    ...state.filter,
                    ...action.changes
                }
            };
        default:
            return state;
    }
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
        case PROVIDER_VERIFICATION_REQUEST:
            return {
                ...state,
                isFetching: true,
                verificationStatus: ''
            };
        case PROVIDER_VERIFICATION_SUCCESS:
            return {
                ...state,
                verificationStatus: 'success',
                isFetching: false
            };
        case PROVIDER_VERIFICATION_FAIL:
            return {
                ...state,
                isFetching: false,
                verificationStatus: 'fail',
            };
        default:
            return state;
    }
}

const providerReducer = combineReducers({
    reservationDetails: reservationDetailsRouter,
    reservations: reservationReducer,
    registration: registrationReducer
});

export default providerReducer;

