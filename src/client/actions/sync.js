export const CLIENT_BOOKING_FROM_CHANGE = 'CLIENT_BOOKING_FROM_CHANGE';

export function clientBookingFormChange(form) {
    return {
        type: CLIENT_BOOKING_FROM_CHANGE,
        form
    };
}
