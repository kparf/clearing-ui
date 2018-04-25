import {
    providerRegistrationRequest,
    providerRegistrationSuccess,
    providerRegistrationFail,
    providerVerificationRequest,
    providerVerificationSuccess,
    providerVerificationFail
} from './sync';
import api from '../../common/api';
import { push } from 'react-router-redux';


export function registerProvider(form, redirect) {
    return async (dispatch) => {
        dispatch(providerRegistrationRequest());
        const response = await api.createProvider(form);
        if (response.ok) {
            const user = await response.json();
            dispatch(providerRegistrationSuccess(user));
            if (redirect) {
                dispatch(push(redirect));
            }
        } else {
            dispatch(providerRegistrationFail());
        }
    }
}

export function verifyProvider(key) {
    return async (dispatch, getState) => {
        dispatch(providerVerificationRequest(key));
        const response = await api.verifyProvider(key);
        if (response.status === 201) {
            dispatch(providerVerificationSuccess());
        } else {
            dispatch(providerVerificationFail());
        }
    }
}

