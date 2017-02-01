/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class MyComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.item}>{this.props.item_name}</Text>
        <Text style={styles.fieldsContainer}>
          <Text style={styles.fields}>Calories: </Text>
          <Text>{this.props.calories} kcal</Text>
        </Text>
        <Text style={styles.fieldsContainer}>
          <Text style={styles.fields}>Total Fat: </Text>
          <Text>{this.props.total_fat} g</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10
  },
  fieldsContainer: {
    marginTop: 2,
  },
  fields: {
    fontSize: 12,
    fontWeight: 'bold',
  },
});
