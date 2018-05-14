import {
    clientAvailableProvidersRequest,
    clientAvailableProvidersSuccess,
    clientAvailableProvidersFail,
    clientFetchAvailableProviders
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
