import {
    authenticationRequest,
    authenticationSuccess,
    authenticationFail
} from './sync';
import api from '../../common/api';
import { push } from 'react-router-redux';

export function loginRequest(form) {
    return async (dispatch) => {
        dispatch(authenticationRequest());
        const response = await api.login(form);
        if (response.status === 201) {
            const body = await response.json();
            dispatch(authenticationSuccess(body))
            if (body.user && body.user.role === 'provider') {
                dispatch(push('/content/provider/reservation-list'));
            } else {
                dispatch(push('/content/'));
            }
        } else {
            dispatch(authenticationFail())
        }
    }
}
