import React from 'react'
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import services from './services';
import ProviderRegistration__Services from './provider-registration__services';

Enzyme.configure({
    adapter: new Adapter()
});

function setup() {
    const props = {
        onChange: jest.fn(),
        services,
        label: 'Services',
        value: []
    };

    const enzymeWrapper = mount(<ProviderRegistration__Services {...props}/>);

    return {
        props,
        enzymeWrapper
    }
}

describe('components', () => {
    describe('ProviderRegistration__Services', () => {

        it('should render self and subcomponents', () => {
            const { enzymeWrapper } = setup();

            expect(enzymeWrapper.find('fieldset').hasClass('provider-registration__services')).toBe(true);
            expect(enzymeWrapper.find('legend').text()).toBe('Services');

        });

        it('should call onChange if changed', () => {
            const { enzymeWrapper, props } = setup();
            expect(props.onChange.mock.calls.length).toBe(0);
            enzymeWrapper.find('Checkbox').first().find('input').simulate('change');
            expect(props.onChange.mock.calls.length).toBe(1);
        });
    });
});

