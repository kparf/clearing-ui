const DATA_URL = 'http://localhost:9000/api';

function fetchServices() {
    return fetch(`${DATA_URL}/services`);
}

function createProvider(form) {
    return fetch(`${DATA_URL}/providers`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(form),
        cache: 'no-cache'
    });
}

function verifyProvider(verificationKey) {
    return fetch(`${DATA_URL}/providers/verify/${verificationKey}`, {
        method: 'POST',
        cache: 'no-cache'
    });
}

export default {
    fetchServices,
    createProvider,
    verifyProvider
};
