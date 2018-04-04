export const REQUEST_SERVICES = 'REQUEST_SERVICES';
export const RECEIVE_SERVICES = 'RECEIVE_SERVICES';

export function requestServices() {
    return {
        type : REQUEST_SERVICES
    }
}

export function receiveServices(data) {
    return {
        type : RECEIVE_SERVICES,
        data: data
    }
}
