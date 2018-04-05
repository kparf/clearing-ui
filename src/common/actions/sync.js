export const LOAD_SERVICES_REQUEST = 'LOAD_SERVICES_REQUEST';
export const LOAD_SERVICES_SUCCESS = 'LOAD_SERVICES_SUCCESS';
export const LOAD_SERVICES_FAIL = 'LOAD_SERVICES_FAIL';

export function loadServicesRequest() {
    return {
        type : LOAD_SERVICES_REQUEST
    }
}

export function loadServicesSuccess(data) {
    return {
        type : LOAD_SERVICES_SUCCESS,
        data: data
    }
}

export function loadServicesFail(data) {
    return {
        type: LOAD_SERVICES_FAIL,
        data: data
    }
}
