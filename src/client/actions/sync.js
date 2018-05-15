export const CLIENT_BOOKING_FROM_CHANGE = 'CLIENT_BOOKING_FROM_CHANGE';
export const CLIENT_CONFIRM_RESERVATION_MODAL_OPEN = 'CLIENT_CONFIRM_RESERVATION_MODAL_OPEN';
export const CLIENT_CONFIRM_RESERVATION_MODAL_CLOSE = 'CLIENT_CONFIRM_RESERVATION_MODAL_CLOSE';
export const CLIENT_CONFIRM_RESERVATION_CANCEL = 'CLIENT_CONFIRM_RESERVATION_CANCEL';
export const CLIENT_CONFIRM_RESERVATION_REQUEST = 'CLIENT_CONFIRM_RESERVATION_REQUEST';
export const CLIENT_CONFIRM_RESERVATION_SUCCESS = 'CLIENT_CONFIRM_RESERVATION_SUCCESS';
export const CLIENT_CONFIRM_RESERVATION_FAIL = 'CLIENT_CONFIRM_RESERVATION_FAIL';
export const CLIENT_FETCH_AVAILABLE_PROVIDERS = 'CLIENT_FETCH_AVAILABLE_PROVIDERS';
export const CLIENT_ADD_AVAILABLE_PROVIDERS = 'CLIENT_ADD_AVAILABLE_PROVIDERS';
export const CLIENT_AVAILABLE_PROVIDERS_REQUEST = 'CLIENT_AVAILABLE_PROVIDERS_REQUEST';
export const CLIENT_AVAILABLE_PROVIDERS_FAIL = 'CLIENT_AVAILABLE_PROVIDERS_FAIL';
export const CLIENT_AVAILABLE_PROVIDERS_SUCCESS = 'CLIENT_AVAILABLE_PROVIDERS_SUCCESS';
export const CLIENT_AVAILABLE_PROVIDERS_UPDATE_FILTER = 'CLIENT_AVAILABLE_PROVIDERS_UPDATE_FILTER';

export function clientBookingFormChange(form) {
    return {
        type: CLIENT_BOOKING_FROM_CHANGE,
        form
    };
}

export function clientConfirmReservationModalOpen(provider) {
    return {
        type: CLIENT_CONFIRM_RESERVATION_MODAL_OPEN,
        provider
    };
}

export function clientConfirmReservationModalClose() {
    return {
        type: CLIENT_CONFIRM_RESERVATION_MODAL_CLOSE
    };
}

export function clientConfirmReservationCancel() {
    return {
        type: CLIENT_CONFIRM_RESERVATION_CANCEL
    };
}

export function clientConfirmReservationRequest(reservation) {
    return {
        type: CLIENT_CONFIRM_RESERVATION_REQUEST,
        reservation
    };
}

export function clientConfirmReservationSuccess(reservation) {
    return {
        type: CLIENT_CONFIRM_RESERVATION_SUCCESS,
        reservation
    };
}

export function clientConfirmReservationFail(reservation) {
    return {
        type: CLIENT_CONFIRM_RESERVATION_FAIL,
        reservation
    };
}

export function clientAvailableProvidersUpdateFilter(filter) {
    return {
        type: CLIENT_AVAILABLE_PROVIDERS_UPDATE_FILTER,
        filter
    }
}

export function clientFetchAvailableProviders(providers) {
    return {
        type: CLIENT_FETCH_AVAILABLE_PROVIDERS,
        providers
    }
}

export function clientAddAvailableProviders(providers) {
    return {
        type: CLIENT_ADD_AVAILABLE_PROVIDERS,
        providers
    }
}

export function clientAvailableProvidersRequest() {
    return {
        type: CLIENT_AVAILABLE_PROVIDERS_REQUEST
    };
}

export function clientAvailableProvidersSuccess() {
    return {
        type: CLIENT_AVAILABLE_PROVIDERS_SUCCESS
    };
}

export function clientAvailableProvidersFail() {
    return {
        type: CLIENT_AVAILABLE_PROVIDERS_FAIL
    };
}
