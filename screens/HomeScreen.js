import React from 'react';

import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class HomeScreen extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>
          Welcome to HuddleUp Challenge!
        </Text>
        <Text style={styles.descriptionText}>
          You have three tasks to make this into a functional app.
        </Text>
        <Text style={styles.descriptionText}> 
          Below you'll see a static image.
          On this screen you'll use the Pixabay API (www.pixabay.com) to load a random image whenever you return to this tab.</Text>
        <Image
          style={styles.image}
          source={{uri: 'https://cdn.pixabay.com/photo/2015/12/13/16/02/ios-1091302_640.jpg'}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
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
  image: {
    width: 320,
    height: 240,
    marginTop: 20,
    alignItems: 'center'
  },
});
