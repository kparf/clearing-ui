import {
    authenticationRequest,
    authenticationSuccess,
    authenticationFail,
    authenticationRestoreRequest,
    authenticationRestoreFail,
    logoutRequest
} from './sync';
import api from '../../common/api';
import { push } from 'react-router-redux';

function extractPayload(token) {
    const [ header, payload, signature ] = token.split('.');
    return JSON.parse(atob(payload));
}

export function loginRequest(form) {
    return async (dispatch) => {
        dispatch(authenticationRequest());
        const response = await api.login(form);
        if (response.status === 201) {
            const body = await response.json();

            localStorage.setItem('access_token', body.token);
            const user = extractPayload(body.token);

            dispatch(authenticationSuccess(user));
            if (user && user.role === 'provider') {
                dispatch(push('/content/provider/reservation-list'));
            } else {
                dispatch(push('/content/'));
            }
        } else {
            dispatch(authenticationFail())
        }
    }
}

export function authenticationRestore() {
    return async (dispatch) => {

        dispatch(authenticationRestoreRequest());

        const token = localStorage.getItem('access_token');
        if (token) {
            const user = extractPayload(token);
            dispatch(authenticationSuccess(user));
        } else {
            dispatch(authenticationRestoreFail())
        }
    }
}

export function logout() {
    return async (dispatch) => {

        dispatch(logoutRequest());
        const token = localStorage.removeItem('access_token');

    }
}
