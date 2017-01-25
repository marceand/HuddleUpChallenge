import React from 'react';
import {
  Image,
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import imageStyle from './styles/ImageStyle';
var imageServiceApi = require("../components/apiservice/ImageApiService");

export default class HomeScreen extends React.Component {
  static route = {
    navigationBar: {
      visible: true,
      title: 'Image',
      tintColor:'#FFFFFF',
      backgroundColor: '#2980b9',
    },
  }

  constructor(props) {
      super(props);
      this.state = {imageData: null};
    }

  componentDidMount(){
    this.getImagesUri();
  }

  render() {
    return(
        <View style={imageStyle.container}>
          <Text style={imageStyle.title}>
            A stunning image
          </Text>

          <View style={imageStyle.imageContainer}>

            {!this.state.imageData && (<Text style={imageStyle.loading}>Loading movies...</Text>)}

            {this.state.imageData && <View>
              <Image
              style={imageStyle.image}
              source={{uri: this.state.imageData.webformatURL}}/>
              <Text style={imageStyle.imageTextContainer}>
                <Text style={imageStyle.imageLikeText}>Like: </Text>
                <Text>{this.state.imageData.likes} </Text>
                <Text style={imageStyle.imageViewText}>  View: </Text>
                <Text>{this.state.imageData.views} </Text>
              </Text>
             </View>}

          </View>
        </View>

      );
    }

    componentWillReceiveProps(nextProps){
      this.reloadImage(nextProps.isFocused);
    }

    reloadImage(isFocused){
      if(isFocused){
        this.resetImageData(null);
        this.getImagesUri();
      }
    }

    getImagesUri(){
        imageServiceApi.fetchImageData().then((responseData) => {
            this.resetImageData(responseData.hits[0]);
          })
          .catch((error) => {
            console.error(error);
          });
    }

    resetImageData(data){
      this.setState({ imageData: data});
    }

  _maybeRenderDevelopmentModeWarning() {
    if (__DEV__) {
      const learnMoreButton = (
        <Text onPress={this._handleLearnMorePress} style={styles.helpLinkText}>
          Learn more
        </Text>
      );

      return (
        <Text style={styles.developmentModeText}>
          Development mode is enabled, your app will run slightly slower but
          you have access to useful development tools. {learnMoreButton}.
        </Text>
      );
    } else {
      return (
        <Text style={styles.developmentModeText}>
          You are not in development mode, your app will run at full speed.
        </Text>
      );
    }
  }

  _handleLearnMorePress = () => {
    Linking.openURL('https://docs.getexponent.com/versions/latest/guides/development-mode');
  }

  _handleHelpPress = () => {
    Linking.openURL('https://docs.getexponent.com/versions/latest/guides/up-and-running.html#can-t-see-your-changes');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 15,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 80,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 200,
    height: 34.5,
    marginTop: 3,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: {height: -3},
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
});
