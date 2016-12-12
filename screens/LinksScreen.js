import React from 'react';

import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  ListView,
} from 'react-native';

export default class LinksScreen extends React.Component {

  constructor() {
    super();
    this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: null
    };
  }
  
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.welcomeText}>
            Nutrition Info ListView
          </Text>
          <Text style={styles.descriptionText}>
            On this screen you'll use the ListView component (https://facebook.github.io/react-native/docs/listview.html)
            and the Nutritionix API (https://www.nutritionix.com/business/api).
          </Text>
          <Text style={styles.descriptionText}> 
            Implement a ListView below "McDonalds" that displays the nutrition information for at least <Text style={{fontWeight: 'bold'}}>51</Text> items on the menu of your favorite fast food restaurant. Feel free to add styling, embellishments, or any other features you'd like!
          </Text>
        </View>
        <Text style={styles.restaurantText}>McDonalds</Text>
      </ScrollView>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    paddingHorizontal: 10
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
  restaurantText: {
    fontSize: 20,
    color: 'rgba(67,100,109, 1)',
    textAlign: 'center',
    padding: 10
  }
});
