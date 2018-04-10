import { combineReducers } from 'redux';
import {
    LOAD_SERVICES_REQUEST,
    LOAD_SERVICES_SUCCESS,
    LOAD_SERVICES_FAIL
} from "./actions/sync";
import authReducer from "../auth/auth-reducer";

function services(state = {
    isFetching: false,
    items: []
}, action) {
    switch (action.type) {
        case LOAD_SERVICES_REQUEST:
            return Object.assign({}, state, {
                isFetching: true
            });
        case LOAD_SERVICES_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.data
            });
        default:
            return state;
    }
}

const commonReducer = combineReducers({
    services,
    user: authReducer
});

export default commonReducer;
