import {
    loadServicesRequest,
    loadServicesSuccess,
    loadServicesFail
} from './sync';
import { fetchServices } from '../api';

export function fetchServices() {
    return async (dispatch, getStatus) => {
        dispatch(loadServicesRequest());
        const response = await fetchServices();
        console.log(response);
        loadServicesSuccess([{
            id: "test",
            name: "name"
        }]);
    }
}
