import {
    providerRegistrationRequest,
    providerRegistrationSuccess,
    providerRegistrationFail,
    providerVerificationRequest
} from './sync';
import api from '../../common/api';
import { push } from 'react-router-redux';


export function registerProvider(form, redirect) {
    console.log(redirect);
    return async (dispatch, history) => {
        dispatch(providerRegistrationRequest());
        const response = await api.createProvider(form);
        if (response.status === 201) {
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
    return (dispatch, getState) => {
        dispatch(providerVerificationRequest(key));
    }
}

