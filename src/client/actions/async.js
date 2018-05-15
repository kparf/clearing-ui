import {
    clientAvailableProvidersRequest,
    clientAvailableProvidersSuccess,
    clientAvailableProvidersFail,
    clientFetchAvailableProviders,
    clientConfirmReservationRequest,
    clientConfirmReservationSuccess,
    clientConfirmReservationFail,
    clientConfirmReservationModalClose
} from "./sync";
import api from '../../common/api';

export function clientFetchAvailableProvidersByServices(services) {
    return async (dispatch, getStatus) => {
        dispatch(clientAvailableProvidersRequest());

        const response = await api.searchAvailableProviders({services});
        if (response.ok) {
            const providers = await response.json();
            dispatch(clientFetchAvailableProviders(providers));
            // dispatch(clientAvailableProvidersSuccess());
        } else {
            dispatch(clientAvailableProvidersFail());
        }
    };
}

export function clientConfirmReservation(reservation) {
    return async (dispatch) => {
        dispatch(clientConfirmReservationRequest());

        const response = await api.createReservation(reservation);
        if (response.ok) {
            dispatch(clientConfirmReservationSuccess());
            dispatch(clientConfirmReservationModalClose());
        } else {
            dispatch(clientConfirmReservationFail());
        }
    }
}
