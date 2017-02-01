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
  Alert,
} from 'react-native';
import {
  ExponentLinksView,
} from '@exponent/samples';

import BrandItem from "../components/viewmodel/BrandItem";
var nutritionixApiService= require("../components/apiservice/NutritionixApiService");


export default class LinksScreen extends React.Component {
  static route = {
    navigationBar: {
      title: 'Nutrition',
      tintColor:'#FFFFFF',
      backgroundColor: '#2980b9',
    },
  }

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = { headingText: "Search for items of your favorite fast food restaurant",
                  userSearch: null,
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
              onPress={this.onPressFindButton.bind(this)}
              title="Find"
              color="#3498db"
            />
            <Text style={styles.headingText}>
              {this.state.headingText}
            </Text>
            <ListView
              style={styles.listView}
              dataSource={this.state.dataSource}
              enableEmptySections={true}
              renderRow={this.renderRow}
              renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
            />
          </View>
        </KeyboardAvoidingView>
    );
  }

  onPressFindButton(event){
      if(this.state.userSearch){
        this.changeHeadingText("searching....");
        this.setListViewToEmpty();
        this.searchItemsForGivenBrandName(this.state.userSearch);
      }else {
        Alert.alert("Enter name of your fast food restaurant");
      }
  }

  renderRow(rowData){
    return <BrandItem item_name = {rowData.fields.item_name}
                      calories = {rowData.fields.nf_calories}
                      total_fat = {rowData.fields.nf_total_fat}/>;
  }

  searchItemsForGivenBrandName(search){
    nutritionixApiService.fetchNutritionData(search).then((nutritionData) => {
        this.resetListData(nutritionData.hits);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  resetListData(itemData){
    if(itemData.length > 0){
      this.showResultHeadingText();
      this.setState({dataSource:this.state.dataSource.cloneWithRows(
        itemData
      )});
    }else {
      this.showNoResultHeadingText();
    }
  }

  showResultHeadingText(){
    this.changeHeadingText(this.state.userSearch + ": Nutrition Fact");
  }

  showNoResultHeadingText(){
    this.changeHeadingText("No result found");
  }

  changeHeadingText(message){
      this.setState({headingText: message});
  }

  setListViewToEmpty(){
    this.setState({dataSource:this.state.dataSource.cloneWithRows([])});
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
  listView: {
    marginTop: 10,
  },
  headingText: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 12,
  },
  separator: {
    flex: 1,
    height: 1,
    backgroundColor: '#8E8E8E',
    marginTop: 10,
  },
});
