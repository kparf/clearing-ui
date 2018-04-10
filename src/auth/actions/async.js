import {
    authenticationRequest,
    authenticationSuccess,
    authenticationFail
} from './sync';
import api from '../api';

export function fetchServices() {
    return async (dispatch, getStatus) => {
        dispatch(loadServicesRequest());
        const response = await api.fetchServices();
        if (response.status === 200) {
            const body = await response.json();
            dispatch(loadServicesSuccess(body));
        } else {
            dispatch(loadServicesFail());
        }
    }
}
