import React from 'react';
import ProviderRegistration from './provider-registration';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock'
import services from './__services/services';

Enzyme.configure({
    adapter: new Adapter()
});

function setup() {

    fetchMock.get('end:/api/services', {
        body: services,
        status: 200
    });

    const middlewares = [thunk];
    const mockStore = configureStore(middlewares);
    const store = mockStore({
        common: {
            services: {
                isFetching: false,
                items: []
            }
        },
        provider: {
            registration: {
                form: {
                },
                isFetching: false,
                isProviderRegistrationFail: false,
                isProviderRegistrationSuccess: false
            }
        }
    });

    const enzymeWrapper = mount(
        <Provider store={store}>
            <ProviderRegistration/>
        </Provider>
    );

    return {
        mockStore,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('ProviderRegistration', () => {

        afterEach(() => {
            fetchMock.reset();
            fetchMock.restore();
        });

        it('should render self and subcomponents', () => {
            const { enzymeWrapper, mockStore } = setup();
        })
    });
});


