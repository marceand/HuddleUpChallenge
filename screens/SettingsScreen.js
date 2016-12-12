import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native';

export default class SettingsScreen extends React.Component {

  constructor() {
    super();
    this.state = { text: '' };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.inner}>
          <Text style={styles.welcomeText}>
            React Native Feedback
          </Text>
          <Text style={styles.descriptionText}>
            Let us know what you think of React Native so far! Complete this form, and modify it to send the input to dan@letshuddleup.com. Feel free to choose your own email API.
          </Text>
          <TextInput
            style={styles.input}
            multiline={true}
            placeholder={'Let us know what you think!'}
          />

          <TouchableHighlight style={styles.touchable}>
            <Text style={styles.submitText}>Submit!</Text>
          </TouchableHighlight>
        </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  inner: {
    flex: 1,
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    padding: 7,
    margin: 20,
    height: 200
  },
   descriptionText: {
    fontSize: 14,
    color: 'rgba(67,100,109, 1)',
    lineHeight: 15,
    textAlign: 'center',
    paddingTop: 10,
  },
  welcomeText: {
    fontSize: 17,
    color: 'rgba(67,100,109, 1)',
    lineHeight: 23,
    textAlign: 'center',
    paddingTop: 55,
  },
  touchable: {
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
    backgroundColor: 'black'
  },
  submitText: {
    color: 'white',
    fontSize: 20
  }
});
