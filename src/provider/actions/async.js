import {
    providerRegistrationRequest,
    providerRegistrationSuccess,
    providerRegistrationFail,
    providerVerificationRequest,
    providerVerificationSuccess,
    providerVerificationFail,
    providerReservationListRequest,
    providerReservationListSuccess,
    providerReservationListFail
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

export function fetchProviderReservations(provider) {
    return async (dispatch, getStatus) => {
        const state = getStatus();

        dispatch(providerReservationListRequest());
        const response = await api.fetchProviderReservations(provider, state.provider.reservations.filter);

        if (response.ok) {
            const reservations = await response.json();
            dispatch(providerReservationListSuccess(reservations));
        } else {
            dispatch(providerReservationListFail());
        }
    }
}

