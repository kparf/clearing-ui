import {
    providerRegistrationRequest,
    providerRegistrationSuccess,
    providerRegistrationFail,
    providerVerificationRequest
} from './sync';
import api from '../../common/api';


export function registerProvider(provider) {
    return (dispatch, getState) => {
        dispatch(providerRegistrationRequest());

    }
}

export function verifyProvider(key) {
    return (dispatch, getState) => {
        dispatch(providerVerificationRequest(key));
    }
}

