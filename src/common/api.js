// @flow
import base64 from 'base-64';
import avalibaleProviders from '../';

const DATA_URL = 'http://localhost:9000/api';

function fetchServices() {
    return fetch(`${DATA_URL}/services`);
}

function createProvider(form: mixed) {
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

function verifyProvider(verificationKey: string) {
    return fetch(`${DATA_URL}/providers/verify/${verificationKey}`, {
        method: 'POST',
        cache: 'no-cache'
    });
}

function login({email, password} : {email: string, password: string}) {
    const creds = base64.encode(`${email}:${password}`);
    return fetch(`${DATA_URL}/auth`, {
        method: 'POST',
        headers: {
            'Authorization': `Basic ${creds}`
        },
    });
}

function searchAvailableProviders({ services }: {services: string[]}) {
    const serviceList = services.join(',');
    return fetch(`${DATA_URL}/providers/search?services=${serviceList}`,{
        cache: 'no-cache'
    })
}

export default {
    fetchServices,
    createProvider,
    verifyProvider,
    login,
    searchAvailableProviders
};
