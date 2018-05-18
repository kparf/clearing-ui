export const PROVIDER_REGISTRATION_REQUEST = 'PROVIDER_REGISTRATION_REQUEST';
export const PROVIDER_REGISTRATION_SUCCESS = 'PROVIDER_REGISTRATION_SUCCESS';
export const PROVIDER_REGISTRATION_FAIL = 'PROVIDER_REGISTRATION_FAIL';
export const PROVIDER_REGISTRATION_CLEAR_STATUS = 'PROVIDER_REGISTRATION_CLEAR_STATUS';
export const PROVIDER_VERIFICATION_REQUEST = 'PROVIDER_VERIFICATION_REQUEST';
export const PROVIDER_VERIFICATION_SUCCESS = 'PROVIDER_VERIFICATION_SUCCESS';
export const PROVIDER_VERIFICATION_FAIL = 'PROVIDER_VERIFICATION_FAIL';
export const PROVIDER_REGISTRATION_FROM_CHANGE = 'PROVIDER_REGISTRATION_FROM_CHANGE';
export const PROVIDER_RESERVATION_LIST_REQUEST = 'PROVIDER_RESERVATION_LIST_REQUEST';
export const PROVIDER_RESERVATION_LIST_SUCCESS = 'PROVIDER_RESERVATION_LIST_SUCCESS';
export const PROVIDER_RESERVATION_LIST_FAIL = 'PROVIDER_RESERVATION_LIST_FAIL';
export const PROVIDER_RESERVATION_FILTER_CHANGE = 'PROVIDER_RESERVATION_FILTER_CHANGE';

export function providerReservationFilterChange(changes) {
    return {
        type: PROVIDER_RESERVATION_FILTER_CHANGE,
        changes
    }
}

export function providerReservationListRequest() {
    return {
        type : PROVIDER_RESERVATION_LIST_REQUEST
    }
}

export function providerReservationListSuccess(reservations) {
    return {
        type : PROVIDER_RESERVATION_LIST_SUCCESS,
        reservations
    }
}

export function providerReservationListFail() {
    return {
        type : PROVIDER_RESERVATION_LIST_FAIL
    }
}

export function providerRegistrationRequest() {
    return {
        type : PROVIDER_REGISTRATION_REQUEST
    }
}

export function providerRegistrationSuccess(user) {
    return {
        type : PROVIDER_REGISTRATION_SUCCESS
    }
}

export function providerRegistrationFail() {
    return {
        type : PROVIDER_REGISTRATION_FAIL
    }
}

export function providerVerificationRequest() {
    return {
        type: PROVIDER_VERIFICATION_REQUEST,
    }
}

export function providerVerificationSuccess(provider) {
    return {
        type: PROVIDER_VERIFICATION_SUCCESS,
        provider
    }
}

export function providerVerificationFail(message) {
    return {
        type: PROVIDER_VERIFICATION_FAIL,
        message
    }
}

export function providerRegistrationFormChange(form) {
    return {
        type: PROVIDER_REGISTRATION_FROM_CHANGE,
        form
    }
}
