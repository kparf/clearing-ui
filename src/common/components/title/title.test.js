import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Title from './title';

Enzyme.configure({
    adapter: new Adapter()
});

describe('common components', () => {
    describe('Title', () => {

        it('should render label', () => {
            const enzymeWrapper = mount(<Title label='TITLE_LABEL'/>);
            expect(enzymeWrapper.find('h1').text()).toBe('TITLE_LABEL');
        });

        it('should render comment', () => {
            const enzymeWrapper = mount(<Title label='TITLE_LABEL' comment='TITLE_COMMENT'/>);
            expect(enzymeWrapper.find('p').text()).toBe('TITLE_COMMENT');
        });

        it('should not render paragraph', () => {
            const enzymeWrapper = mount(<Title label='TITLE_LABEL'/>);
            expect(enzymeWrapper.find('p').exists()).toBeFalsy();
        });
    });
});

