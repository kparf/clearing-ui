import * as actions from './sync';

describe('actions', () => {
    it('should create an action to provider verification success', () => {

        const provider = {
            "address": "Address",
            "description": "Description 1",
            "rating": 0,
            "services": [
                "INDUSTRIAL",
                "STANDARD_ROOM"
            ],
            "createdAt": "2018-04-24T13:03:50.252Z",
            "updatedAt": "2018-04-24T13:03:50.269Z",
            "id": "5adf2b36b40ee80031f51e7a"
        };
        const expectedAction = {
            type: actions.PROVIDER_VERIFICATION_SUCCESS,
            provider
        };


        expect(actions.providerVerificationSuccess(provider)).toEqual(expectedAction);
    })
});
