import {
    requestServices,
    receiveServices
} from '../actions';

export function fetchServices() {
    return (dispatch, getState) => {
        dispatch(receiveServices());

        console.log('test get State!');
        console.log(getState());

        dispatch(receiveServices([
            {
                "id": "STANDARD_ROOM",
                "name" : "Standard room cleaning"
            },
            {
                "id": "GENERAL",
                "name": "General cleaning"
            },
            {
                "id": "REPAIR_AND_CONSTRUCTION",
                "name": "Cleaning after repair and construction"
            },
            {
                "id": "CARPET",
                "name": "Carpet cleaning services"
            },
            {
                "id": "OFFICES",
                "name": "Cleaning of offices"
            },
            {
                "id": "FURNITURE_AND_SURFACES",
                "name": "furniture and surfaces"
            },
            {
                "id": "INDUSTRIAL",
                "name": "Industrial cleaning"
            },
            {
                "id": "POOL",
                "name": "Cleaning of the pool"
            }
        ]));
    }
}


