import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  Button,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';
import {
  ExponentConfigView,
} from '@exponent/samples';

import StarRating from 'react-native-star-rating';
var emailServiceApi = require("../components/apiservice/MailGunApiService");
var emailMessageFactory = require("../components/factory/EmailMessageFactory");

export default class SettingsScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Feedback',
      tintColor:'#FFFFFF',
      backgroundColor: '#2980b9',
    },
  }

  constructor() {
    super();
    this.state = { username: null,
                   email: null,
                   ratingCount: 0,
                   feedback: null};
  }

  render() {
    return (

      <ScrollView>
        <KeyboardAvoidingView behavior="padding">
          <View style={styles.container}>
            <Text style={styles.title}>React Native Feedback</Text>
            <Text>Let us know what you think of React Native so far.</Text>
            <TextInput
              placeholder="Enter your name"
              onChangeText={(givenname) => this.setState({username:givenname})}
              style = {styles.inputName}
              returnKeyType="next"
              value={this.state.username}
            />
              <TextInput
                placeholder="enter@email.com"
                onChangeText={(givenmail) => this.setState({email:givenmail})}
                style = {styles.inputEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                value={this.state.email}
              />
            <Text style={styles.rateDescription}>Rate your experience:</Text>
            <StarRating
              disabled={false}
              maxStars={5}
              rating={this.state.ratingCount}
              selectedStar={(rating) => this.onStarRatingPress(rating)}
              starColor={'red'}
            />
            <TextInput
                placeholder  = "Write your feeback"
                onChangeText={(givenfeedback) => this.setState({feedback:givenfeedback})}
                style = {styles.inputFeedback}
                multiline = {true}
                textAlignVertical = "top"
                autoCapitalize = "sentences"
                underlineColorAndroid = "transparent"
                value={this.state.feedback}
              />
              <Button
                onPress={this.onPressSendFeedbackButton.bind(this)}
                title="Send Feedback"
                color="#3498db"
              />
         </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }

  onStarRatingPress(rating) {
    this.setState({ratingCount: rating});
  }
  onPressSendFeedbackButton(event){

    if(!this.isUserName()){
      this.showAlert("Enter your name");
    } else if (!this.isEmail()) {
      this.showAlert("Enter an email address");
    }else if (!this.isValidEmail(this.state.email)) {
      this.showAlert("Invalid email! Enter a valid email");
    }else if (!this.isRate()) {
      this.showAlert("Rate your experience.");
    }else if (!this.isFeedback()) {
      this.showAlert("Give us a feedback to improve react native");
    }else {
      this.sendEmail(this.state.username, this.state.email, this.state.ratingCount, this.state.feedback);
    }
  }

  isUserName(){
    return this.state.username != null ? true:false;
  }

  isEmail(){
    return this.state.email != null ? true: false;
  }

  isValidEmail(useremail){
    let filter = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return filter.test(useremail);
  }

  isRate(){
    return this.state.ratingCount > 0 ? true: false;
  }

  isFeedback(){
    return this.state.feedback != null ? true: false;
  }

  showAlert(message){
    Alert.alert(message);
  }

  resetState(){
    this.setState({username: null,
                   email: null,
                   ratingCount: 0,
                   feedback: null});
  }

  sendEmail(name, email, rate, feedback){
    let message = emailMessageFactory.makeEmailMessage(name, rate, feedback);
    emailServiceApi.postEmail(email,message).then((responseData) => {
      this.resetState();
      this.showAlert("Email Sent! Thank for your feedback!");
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin:16,
    flexGrow: 1,
    marginBottom: 26
  },
  title: {
    fontSize: 14,
    textAlign:'center',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputName: {
    height: 40,
    marginTop: 12,
  },
  inputEmail: {
    height: 40,
    marginTop: 12,
  },
  rateDescription: {
    fontWeight: 'bold',
    marginTop: 12,
    marginBottom: 10
  },
  inputFeedback: {
    height: 200,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 12,
    marginBottom:12,
    padding:6,
  },
   descriptionText: {
    fontSize: 14,
    color: 'rgba(67,100,109, 1)',
    lineHeight: 15,
    textAlign: 'left',
    paddingTop: 10,
  },
  welcomeText: {
    fontSize: 17,
    color: 'rgba(67,100,109, 1)',
    lineHeight: 23,
    textAlign: 'center',
    paddingTop: 55,
  },
});
