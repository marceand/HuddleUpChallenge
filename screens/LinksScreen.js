import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ListView,
  TextInput,
  Button,
  KeyboardAvoidingView,
} from 'react-native';
import {
  ExponentLinksView,
} from '@exponent/samples';

export default class LinksScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Nutrition',
      visible: true,
      title: 'Image',
      tintColor:'#FFFFFF',
      backgroundColor: '#2980b9',
    },
  }

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {userSearch: null,
                  dataSource: ds.cloneWithRows([])};
  }
  render() {
    return (

      <KeyboardAvoidingView behavior="padding">
          <View style={styles.searchContainer}>
            <TextInput
              style={styles.textInput}
              placeholder="Enter your fast food restaurant"
              onChangeText={(searchText) => this.setState({userSearch:searchText})}
            />
            <Button
              style={styles.findButton}
              onPress={this.onPressFindButton.bind(this)}
              title="Find"
              color="#3498db"
            />
            <ListView
              dataSource={this.state.dataSource}
              renderRow={(rowData) => <Text>{rowData}</Text>}
            />
          </View>
        </KeyboardAvoidingView>
    );
  }

  onPressFindButton(event){
      if(this.state.userSearch){
        this.setState({ userSearch: this.state.userSearch+" is searched"});

        this.setState({dataSource:
          this.state.dataSource.cloneWithRows(
            ['John', 'Joel', 'James', 'Jimmy',
            'Jackson', 'Jillian', 'Julie', 'Devin'])});
      }
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
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
  searchContainer: {
    margin: 16,
  },
  textInput: {
    height: 40,
  },
});
