const DATA_URL = 'localhost:9000/api';

export function fetchServices() {
    return fetch(`${DATA_URL}/services`);
}
