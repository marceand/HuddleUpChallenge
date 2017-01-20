import React from 'react';
import { View,Text} from 'react-native';
import {shallow} from 'enzyme';
import RandomImage from '../randomimage/RandomImage';
import { expect } from 'chai';

describe('RandomImage', () => {
  beforeEach(function() {
  wrapper = shallow(<RandomImage/>);
  });

  it('should be a view component', () => {
  expect(wrapper.type()).to.equal(View);
  });

  it('should have a title Comment It', () => {
  expect(wrapper.contains(<Text>Comment It</Text>)).to.equal(true);
  });

});
