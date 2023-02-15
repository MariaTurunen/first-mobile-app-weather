import {StyleSheet, Text, View, SafeAreaView, FlatList, StatusBar, ScrollView} from 'react-native'
// import React, {useState, useEffect} from 'react'
import Constants from 'expo-constants'
import Header from './Header'
import ForecastList from './ForecastList'

const DATA = [
  {
    time: "monday",
    temperature: -2,
    description: 'Sunny',
  },
  {
    time: "tuesday",
    temperature: -5,
    description: 'Cloudy',
  },
  {
    time: "wednesday",
    temperature: 2,
    description: 'Rain',
  },
  {
    time: "monday",
    temperature: -2,
    description: 'Sunny',
  },
  {
    time: "tuesday",
    temperature: -5,
    description: 'Cloudy',
  },
  {
    time: "wednesday",
    temperature: 2,
    description: 'Rain',
  },
  {
    time: "monday",
    temperature: -2,
    description: 'Sunny',
  },
  {
    time: "tuesday",
    temperature: -5,
    description: 'Cloudy',
  },
  {
    time: "wednesday",
    temperature: 2,
    description: 'Rain',
  },
];

export default ForecastScreen = () => {


  return (
    <View style = {styles.appContainer}>
      <ScrollView nestedScrollEnabled={true} style={{ width: "100%" }}>
        <View style={styles.content}>
          <Header style={styles.header}/>
            {/* <WeatherSearch/> */}
              <View style= {styles.SearchAndCity}>
                <Text style= {styles.city}> Tampere </Text>
              </View>
                <View style= {styles.list}>
                <ScrollView horizontal={true} style={{ width: "100%" }} >
                  <FlatList
                    data={DATA}
                    renderItem={({item}) => <ForecastList
                    time= {item.time}
                    temperature = {item.temperature}
                    description={item.description} />}
                    // keyExtractor={item => item.temperature}
                  />
                  </ScrollView>
                </View>
        </View>
      </ScrollView>
    </View>

    )
}
const styles = StyleSheet.create({
  // background and statusbarheight
  appContainer: {
    flex: 1,
    backgroundColor: 'white',
    //  Takes Phone statusbar height
    paddingTop: Constants.statusBarHeight,
  },
  header:{
  flex: 1,
    backgroundColor: '#a5c4d4',
  },
  SearchAndCity:{
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
  },
  city:{
    fontSize:28,
    fontWeight: 'bold',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    backgroundColor: '#a5c4d4',

  },
  list:{
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
});