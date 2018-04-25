import providerReducer from './provider-reducer';
import {
    PROVIDER_REGISTRATION_FROM_CHANGE,
    PROVIDER_REGISTRATION_SUCCESS,
    PROVIDER_REGISTRATION_FAIL,
    PROVIDER_REGISTRATION_CLEAR_STATUS,
    PROVIDER_REGISTRATION_REQUEST,
    PROVIDER_VERIFICATION_REQUEST,
    PROVIDER_VERIFICATION_SUCCESS,
    PROVIDER_VERIFICATION_FAIL
} from "./actions/sync";

describe('provider reducer', () => {
    it('should return the initial state', () => {
       expect(providerReducer(undefined, {})).toEqual({
           registration: {
               form: {},
               isProviderRegistrationSuccess: false,
               isProviderRegistrationFail: false,
               isFetching: false
           },
           reservations: {
               isFetching: false,
               items: []
           }
       });
    });

    it(`should handler ${PROVIDER_REGISTRATION_FROM_CHANGE}`, () => {
        const resultStatus = providerReducer(undefined, {
            type: PROVIDER_REGISTRATION_FROM_CHANGE,
            form: {
                email: 'test.test@mail.com'
            }
        });

        expect(resultStatus).toEqual({
            registration: {
                form: {
                    email: 'test.test@mail.com'
                },
                isProviderRegistrationSuccess: false,
                isProviderRegistrationFail: false,
                isFetching: false
            },
            reservations: {
                isFetching: false,
                items: []
            }
        });
    })
});
