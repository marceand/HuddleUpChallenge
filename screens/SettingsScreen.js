import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
} from 'react-native';
import {
  ExponentConfigView,
} from '@exponent/samples';

export default class SettingsScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'exp.json'
    },
  }

  constructor() {
    super();
    this.state = { text: 'Let us know what you think!' };
  }

  _onSumbit() {
    return;
  }

  render() {
    return (
      <ScrollView
        style={styles.container}
        contentContainerStyle={this.props.route.getContentContainerStyle()}>

        <View>
        <Text style={styles.welcomeText}>React Native Feedback</Text>
        <Text style={styles.descriptionText}>Let us know what you think of React Native so far!  Complete this form, and modify it to send the input to dan@letshuddleup.com.  Feel free to choose your own email API.</Text>
       <TextInput
        style={{height: 300}}
        multiline={true}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
      />

      <TouchableHighlight onPress={this._onSumbit}><Text style={{fontSize: 28}}>Submit!</Text></TouchableHighlight>
       </View>

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
