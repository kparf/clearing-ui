import {
    providerRegistrationRequest,
    providerRegistrationSuccess,
    providerRegistrationFail,
    providerVerificationRequest,
    providerVerificationSuccess,
    providerVerificationFail,
    providerReservationListRequest,
    providerReservationListSuccess,
    providerReservationListFail,
    providerReservationDetailsRequest,
    providerReservationDetailsFail,
    providerReservationDetailsSuccess,
    providerReservationDetailsConfirm,
    providerReservationDetailsConfirmSuccess,
    providerReservationDetailsConfirmFail,
    providerReservationDetailsCancel,
    providerReservationDetailsCancelSuccess,
    providerReservationDetailsCancelFail, providerReservationDetailsCancelCommentChange
} from './sync';
import api from '../../common/api';
import { push } from 'react-router-redux';


export function providerConfirmReservation(id) {
    return async (dispatch) => {
        dispatch(providerReservationDetailsConfirm());
        const response = await api.providerConfirmReservation(id);
        if (response.ok) {
            const reservation = await response.json();
            dispatch(providerReservationDetailsConfirmSuccess(reservation));
        } else {
            dispatch(providerReservationDetailsConfirmFail());
        }
    };
}

export function providerCancelReservation() {
    return async (dispatch, getStatus) => {
        const state = getStatus();
        dispatch(providerReservationDetailsCancel());
        const comment = state.provider.reservationDetails.cancelComment.value;
        const id = state.provider.reservationDetails.id;

        const response = await api.providerCancelReservation(id, {comment});

        if (response.ok) {
            const reservation = await response.json();
            dispatch(providerReservationDetailsCancelSuccess(reservation));
            dispatch(providerReservationDetailsCancelCommentChange(false, ''));
        } else {
            dispatch(providerReservationDetailsCancelFail());
        }
    };
}

export function fetchReservationDetails(id) {
    return async (dispatch) => {
        dispatch(providerReservationDetailsRequest());
        const response = await api.fetchReservationDetails(id);
        if (response.ok) {
            const reservation = await response.json();
            dispatch(providerReservationDetailsSuccess(reservation));
        } else {
            dispatch(providerReservationDetailsFail());
        }
    }
}

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

