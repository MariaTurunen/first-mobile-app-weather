import { View, TextInput, StyleSheet,} from 'react-native'
import React, {useState,}from 'react'
import {EvilIcons} from '@expo/vector-icons'

export default WeatherSearch = ({fetchWeatherData}) => {
  const [cityName, setCityname] = useState('');

  return (
    <View style={styles.searchBar}>
    <TextInput
    placeholder= 'Search City'
    value= {cityName}
    onChangeText= {(text) => setCityname(text)}/>
    <EvilIcons name='search' size= {28} color='black'
    onPress= {() => fetchWeatherData(cityName)}/>
    </View>
  );
}
// style search bar
const styles = StyleSheet.create({
  searchBar: {
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    width: '90%',
    paddingVertical:10,
    padding: 8,
    borderWidth:1.5,
    borderRadius: 25,
    marginHorizontal:10,
    paddingHorizontal:10,
    backgroundColor:'#E4EFF1',
  },
});