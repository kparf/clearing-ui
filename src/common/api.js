const DATA_URL = 'http://localhost:9000/api';

function fetchServices() {
    return fetch(`${DATA_URL}/services`);
}

export default {
    fetchServices
};
