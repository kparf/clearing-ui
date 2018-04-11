export const AUTHENTICATION_REQUEST = 'AUTHENTICATION_REQUEST';
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
export const AUTHENTICATION_FAIL = 'AUTHENTICATION_FAIL';
export const LOGIN_FROM_CHANGE = 'LOGIN_FROM_CHANGE';

export function authenticationRequest() {
    return {
        type : AUTHENTICATION_REQUEST
    }
}

export function authenticationSuccess(data) {
    return {
        type : AUTHENTICATION_SUCCESS,
        data
    }
}

export function authenticationFail(message) {
    return {
        type: AUTHENTICATION_FAIL,
        message
    }
}

export function loginFormChange(form) {
    return {
        type: LOGIN_FROM_CHANGE,
        form
    }
}
