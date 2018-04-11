import {
    AUTHENTICATION_SUCCESS,
    LOGIN_FROM_CHANGE
} from "./actions/sync";

export function authReducer(state = {
    role: 'guest',
}, action) {
    switch (action.type) {
        case AUTHENTICATION_SUCCESS:
            return {
                ...state,
                ...action.data.user
            };
        default:
            return state;
    }
}

export function loginFormReducer(state = {
    isFetching: false,
    email: '',
    password: ''
}, action) {
    switch (action.type) {
        case LOGIN_FROM_CHANGE:
            return {
                ...state,
                ...action.form
            };
        case AUTHENTICATION_SUCCESS:
            return {
                ...state
            };
        default:
            return state;
    }
}
