import React from 'react';
import expect from 'expect';
import CourseForm from './CourseForm';
import TestUtils from 'react-addons-test-utils';
import {shallow, mount} from 'enzyme';

function setup(saving){
    let props = {
        course: {},
        authors: [],
        saving: saving,
        onChange: () => {},
        onSave: () => {}
    };
    return shallow(<CourseForm {...props} />);
}

describe('CourseForm via React test utils', () => {
    it('should display save button with text as Save', () => {
        const wrapper = setup(false);
        expect(wrapper.find('button').text()).toEqual('Save');
    });

    it('should display save button with text as Saving', () => {
        const wrapper = setup(true);
        expect(wrapper.find('button').text()).toEqual('Saving...');
    });
});