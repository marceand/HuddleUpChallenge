// import React from 'react';
// import { View,Text, Image} from 'react-native';
// import {shallow} from 'enzyme';
// import RandomImage from '../randomimage/RandomImage';
// import { expect } from 'chai';
// import sinon from '../../node_modules/sinon/lib/sinon/spy';
//
// var imageServiceApi = require("../apiservice/ImageApiService");
//
// describe('RandomImage', () => {
//
//   beforeEach(function() {
//    wrapper = shallow(<RandomImage/>);
//  });
//
//    it('should have a title text', () => {
//      expect(wrapper.contains(<Text>Check a stunning image</Text>)).to.equal(true);
//    });
//
//    it('should have a loading text', () => {
//      expect(wrapper.contains(<Text>Loading movies...</Text>)).to.equal(true);
//    });
//
//   it('should have an image with a random uri', () => {
//     randomImageUri = getARandomUri();
//     wrapper.setState({imageUri: randomImageUri});
//     expect(wrapper.find(Image).props().source.uri).to.equal(randomImageUri);
//   });
//
//   it('should get images uri from api service', () => {
//     // randomImage = new RandomImage();
//     //
//     // sinon.stub(randomImage, 'getImagesUri');
//     //
//     // randomImage.componentDidMount();
//     //
//     // expect(randomImage.getImagesUri.calledOnce).to.be.true;
//
//   });
// });
//
// function getARandomUri(){
//   var uriArray = ['https://facebook.github.io/react/img/logo_og.png',
//   'https://cdn.pixabay.com/photo/2015/12/13/16/02/ios-1091302_640.jpg'];
//   return uriArray[Math.floor(Math.random() * uriArray.length)];
// };
