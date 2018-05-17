export const AUTHENTICATION_REQUEST = 'AUTHENTICATION_REQUEST';
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
export const AUTHENTICATION_FAIL = 'AUTHENTICATION_FAIL';
export const LOGIN_FROM_CHANGE = 'LOGIN_FROM_CHANGE';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const AUTHENTICATION_RESTORE = 'AUTHENTICATION_RESTORE';
export const AUTHENTICATION_RESTORE_FAIL = 'AUTHENTICATION_RESTORE_FAIL';

export function authenticationRestoreRequest() {
    return {
        type : AUTHENTICATION_RESTORE
    }
}

export function authenticationRestoreFail() {
    return {
        type : AUTHENTICATION_RESTORE_FAIL
    }
}

export function authenticationRequest() {
    return {
        type : AUTHENTICATION_REQUEST
    }
}

export function logoutRequest() {
    return {
        type : LOGOUT_REQUEST
    }
}

export function authenticationSuccess(user) {
    return {
        type : AUTHENTICATION_SUCCESS,
        user
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
