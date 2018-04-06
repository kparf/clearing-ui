export const PROVIDER_REGISTRATION_REQUEST = 'PROVIDER_REGISTRATION_REQUEST';
export const PROVIDER_REGISTRATION_SUCCESS = 'PROVIDER_REGISTRATION_SUCCESS';
export const PROVIDER_REGISTRATION_FAIL = 'PROVIDER_REGISTRATION_FAIL';
export const PROVIDER_VERIFICATION_REQUEST = 'PROVIDER_VERIFICATION_REQUEST';
export const PROVIDER_VERIFICATION_SUCCESS = 'PROVIDER_VERIFICATION_SUCCESS';
export const PROVIDER_VERIFICATION_FAIL = 'PROVIDER_VERIFICATION_FAIL';

export function providerRegistrationRequest() {
    return {
        type : PROVIDER_REGISTRATION_REQUEST
    }
}

export function providerRegistrationSuccess() {
    return {
        type : PROVIDER_REGISTRATION_SUCCESS
    }
}

export function providerRegistrationFail() {
    return {
        type : PROVIDER_REGISTRATION_FAIL
    }
}

export function providerVerificationRequest(key) {
    return {
        type: PROVIDER_VERIFICATION_REQUEST,
        key
    }
}

export function providerVerificationSuccess(provider) {
    return {
        type: PROVIDER_VERIFICATION_SUCCESS,
        provider
    }
}

export function providerVerificationFail(message) {
    return {
        type: PROVIDER_VERIFICATION_FAIL,
        message
    }
}

