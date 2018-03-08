import React from 'react';
import { Selector } from './Selector';
import { shallow } from 'enzyme';

describe('<Selector />', () => {
    it('should have two options', () => {
        const listItems = [{
            value: 'sampleValue',
            label: 'sampleLabel'
        }, {
            value: 'sampleValue2',
            label: 'sampleLabel2'
        }];
        const wrapper = shallow(<Selector label="Sample" name="sample" options={listItems} />);
        const actual = wrapper.find('option');
        expect(actual.at(0).text()).toEqual('sampleLabel');
        expect(actual.at(1).text()).toEqual('sampleLabel2');
        expect(actual.length).toEqual(2);
    });

});
