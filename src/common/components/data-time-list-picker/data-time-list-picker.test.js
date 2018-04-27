import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import DataTimeListPicker from './data-time-list-picker';


Enzyme.configure({
    adapter: new Adapter()
});

describe('common components', () => {
    describe('DataTimeListPicker', () => {

        it('should render by default one item', () => {
            const enzimeWrapper = mount(<DataTimeListPicker />);
            expect(enzimeWrapper.find('.data-time-list-picker__item').length).toBe(1);
        });

        it('should render custom amount of items', () => {
            const dates = [
                new Date(),
                new Date(),
                new Date(),
                new Date(),
                new Date(),
            ];
            const enzimeWrapper = mount(<DataTimeListPicker values={dates}/>);
            expect(enzimeWrapper.find('.data-time-list-picker__item').length).toBe(5);
        });

        it('should generate change if remove item', () => {

            const dates = [
                new Date(),
                new Date(),
                new Date()
            ];
            const onChange = jest.fn();
            const enzimeWrapper = mount(<DataTimeListPicker values={dates} onChange={onChange}/>);

            enzimeWrapper.find('.data-time-list-picker__remove-button').first().simulate('click');
            expect(onChange.mock.calls.length).toBe(1);

        });

        it('should generate change if remove item', () => {

            const dates = [
                new Date(),
                new Date(),
                new Date()
            ];
            const onChange = jest.fn();
            const enzimeWrapper = mount(<DataTimeListPicker values={dates} onChange={onChange}/>);

            enzimeWrapper.find('.data-time-list-picker__add-item').first().simulate('click');
            expect(onChange.mock.calls.length).toBe(1);

        });
    })
});
