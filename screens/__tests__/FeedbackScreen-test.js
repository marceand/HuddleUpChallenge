import React from 'react';
import { View,
  Text,
  Image,
  TextInput,
  Button,
  ListView,
  } from 'react-native';
import {shallow} from 'enzyme';
import SettingsScreen from '../SettingsScreen';
import { expect } from 'chai';
import StarRating from 'react-native-star-rating';

describe('FeedbackScreen', () => {

  beforeEach(function() {
   wrapper = shallow(<SettingsScreen/>);
    });

   it('should have a title text', () => {
     expect(wrapper.find(Text).at(0).contains("React Native Feedback")).to.be.true;
   });

   it('should have a desciption text', () => {
     expect(wrapper.find(Text).at(1).contains("Let us know what you think of React Native so far.")).to.be.true;
   });

   it('should have a name input text with placeholder', () => {
     expect(wrapper.find(TextInput).at(0).props().placeholder).to.equal("Enter your name");
   });

   it('should have an email input text with placeholder', () => {
     expect(wrapper.find(TextInput).at(1).props().placeholder).to.equal("enter@email.com");
   });

   it('should have a rating experience of 5 stars', () => {
     expect(wrapper.find(Text).at(2).contains("Rate your experience:")).to.be.true;
     expect(wrapper.find(StarRating).first().props().maxStars).to.equal(5);
   });

   it('should have a text input feedback with placeholder', () => {
     expect(wrapper.find(TextInput).at(2).props().placeholder).to.equal("Write your feeback");
   });

   it('should have a send button', () => {
     expect(wrapper.find(Button).first().props().title).to.equal("Send Feedback");
   });

   it('should able to handle user input text change', () => {
     const nameInput = wrapper.find(TextInput).at(0);
     const emailInput = wrapper.find(TextInput).at(1);
     const feedbackInput = wrapper.find(TextInput).at(2);

     nameInput.simulate('ChangeText','marcelino');
     emailInput.simulate('ChangeText','developer@gmail.com');
     feedbackInput.simulate('ChangeText','I really like react native');

     expect(wrapper.state('username')).to.equal('marcelino');
     expect(wrapper.state('email')).to.equal('developer@gmail.com');
     expect(wrapper.state('feedback')).to.equal('I really like react native');

   });
});
