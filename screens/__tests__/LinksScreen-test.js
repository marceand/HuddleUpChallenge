import React from 'react';
import { View,
  Text,
  Image,
  TextInput,
  Button,
  ListView,
  } from 'react-native';
import {shallow} from 'enzyme';
import LinksScreen from '../LinksScreen';
import { expect } from 'chai';

describe('LinksScreen', () => {

  beforeEach(function() {
   wrapper = shallow(<LinksScreen/>);
    });

   it('should have an input text with placeholder', () => {
     expect(wrapper.find(TextInput).first().props().placeholder).to.equal("Enter your fast food restaurant");
   });

   it('should have a button with find title and on press listener', () => {
     expect(wrapper.find(Button).first().props().title).to.equal("Find");
   });

   it('should be able to perform a search when find button clicked', () => {
     const userInput = wrapper.find('TextInput').first();
     const findButton = wrapper.find(Button).first();
     userInput.simulate('ChangeText','McDonalds');
     findButton.simulate('press');
     expect(wrapper.state('userSearch')).to.equal('McDonalds is searched');
   });

   it('should have a list view of nutrition information', () => {
     const data =
     new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows([
       ['John', 'Joel', 'James', 'Jimmy',
       'Jackson', 'Jillian', 'Julie', 'Devin']
      ]);
     wrapper.setState({dataSource: data});
     expect(wrapper.find(ListView).props().dataSource).to.equal(data);
   });
});
