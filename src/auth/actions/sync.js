export const AUTHENTICATION_REQUEST = 'AUTHENTICATION_REQUEST';
export const AUTHENTICATION_SUCCESS = 'AUTHENTICATION_SUCCESS';
export const AUTHENTICATION_FAIL = 'AUTHENTICATION_FAIL';

export function authenticationRequest() {
    return {
        type : AUTHENTICATION_REQUEST
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
