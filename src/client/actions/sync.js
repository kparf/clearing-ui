export const CLIENT_BOOKING_FROM_CHANGE = 'CLIENT_BOOKING_FROM_CHANGE';
export const CLIENT_CONFIRM_RESERVATION_MODAL_OPEN = 'CLIENT_CONFIRM_RESERVATION_MODAL_OPEN';
export const CLIENT_CONFIRM_RESERVATION_MODAL_CLOSE = 'CLIENT_CONFIRM_RESERVATION_MODAL_CLOSE';
export const CLIENT_CONFIRM_RESERVATION_CANCEL = 'CLIENT_CONFIRM_RESERVATION_CANCEL';
export const CLIENT_CONFIRM_RESERVATION_CONFIRM = 'CLIENT_CONFIRM_RESERVATION_CONFIRM';

export function clientBookingFormChange(form) {
    return {
        type: CLIENT_BOOKING_FROM_CHANGE,
        form
    };
}

export function clientConfirmReservationModalOpen(form) {
    return {
        type: CLIENT_CONFIRM_RESERVATION_MODAL_OPEN,
        form
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

export function clientConfirmReservationConfirm(form) {
    return {
        type: CLIENT_CONFIRM_RESERVATION_CONFIRM,
        form
    };
}
