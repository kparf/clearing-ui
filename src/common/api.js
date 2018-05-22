// @flow
import base64 from 'base-64';

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

function createReservation(reservation: any) {
    return fetch(`${DATA_URL}/reservations`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(reservation)
    });
}

function fetchProviderReservations(providerId: string, filter: any = {}) {

    let serviceFilter = '';
    let stateFilter = '';
    if (filter.services && filter.services.length > 0) {
        serviceFilter = `&services=${filter.services.join(',')}`;
    }
    if (filter.statuses && filter.statuses.length > 0) {
        stateFilter = `&statuses=${filter.statuses.join(',')}`;
    }


    return fetch(`${DATA_URL}/reservations/search?provider=${providerId}${serviceFilter}${stateFilter}`, {
        cache: 'no-cache'
    });
}

function fetchReservationDetails(id: string) {
    return fetch(`${DATA_URL}/reservations/${id}`, {
        cache: 'no-cache'
    });
}

function providerConfirmReservation(id: string) {
    return fetch(`${DATA_URL}/reservations/confirm/${id}`, {
        method: 'PUT'
    });
}

export default {
    fetchServices,
    fetchProviderReservations,
    createProvider,
    verifyProvider,
    login,
    searchAvailableProviders,
    createReservation,
    fetchReservationDetails,
    providerConfirmReservation
};
