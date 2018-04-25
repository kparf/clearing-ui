import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock'
import {
    registerProvider,
    verifyProvider
} from './async';
import {
    providerRegistrationFail,
    providerRegistrationRequest, providerRegistrationSuccess
} from "./sync";

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

const provider = {
    "name": "test provider",
    "email": "test.provider@mail.com",
    "address": "test address",
    "description": "test description",
    "rating" : 5,
    "password" : "password",
    "services" : [
        "STANDARD_ROOM"
    ]
};

const createProviderResponse = {
    "email": "test.provider@mail.com",
    "name": "test provider",
    "role": "provider",
    "createdAt": "2018-04-25T12:27:05.544Z",
    "updatedAt": "2018-04-25T12:27:05.579Z",
    "id": "5ae07419b40ee80031f51e7b"
};

describe('provider async actions', () => {

    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it('should execute provider registration successfully', () => {

        fetchMock.postOnce('end:/api/providers', {
            body: createProviderResponse,
            status: 201
        });

        const store = mockStore({});
        return store.dispatch(registerProvider(provider))
            .then(() => {
                const actions = store.getActions();
                expect(actions[0]).toEqual(providerRegistrationRequest());
                expect(actions[1]).toEqual(providerRegistrationSuccess());
            })
    });

    it('should execute provider registration failure', () => {

        fetchMock.postOnce('end:/api/providers', {
            body: {},
            status: 400
        });

        const store = mockStore({});
        return store.dispatch(registerProvider(provider))
            .then(() => {
                const actions = store.getActions();
                expect(actions[0]).toEqual(providerRegistrationRequest());
                expect(actions[1]).toEqual(providerRegistrationFail());
            })
    });
});




