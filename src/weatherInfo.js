import { Text, View, StyleSheet, SafeAreaView, Image, Dimensions } from 'react-native'
import React from 'react'
import WeatherSearch from './search'

export default WeatherInfo =({weatherData, fetchWeatherData}) => {
  const {
    data: [{
        sunrise, sunset, city_name, temp, wind_spd, app_temp, rh, vis, weather: {description, icon}}]
  } = weatherData;

  return (
    <SafeAreaView style={styles.infoContainer}>
    <WeatherSearch fetchWeatherData= {fetchWeatherData}/>
        <View style={styles.cityWeatherInfo}>
          <Text style={styles.cityTitle}> {city_name} </Text>

        <View style={styles.logo}>
          <Image
            style={styles.largeIcon}
            source={{uri:`https://www.weatherbit.io/static/img/icons/${icon}.png`}}/>
          <Text style={styles.currentTemp}> {temp} °C </Text>
        </View>
          <Text style={styles.description}> {description} </Text>
          </View>
        <View style={styles.extrainfo}>
          <View style={styles.info}>
            <Image
              style={styles.smallIcon}
              source={require('../assets/temp.jpg')}/>
            <Text tyle={styles.infoText}> {app_temp} °C </Text>
            <Text style={styles.infoText}> FEELS LIKE </Text>
          </View>
          <View style={styles.info}>
            <Image
              style={styles.smallIcon}
              source={require('../assets/humidity.png')} />
            <Text tyle={styles.infoText}> {rh} % </Text>
            <Text style={styles.infoText}> HUMIDITY </Text>
          </View>
          </View>
          <View style={styles.extrainfo}>
          <View style={styles.info}>
            <Image
              style={styles.smallIcon}
              source={require('../assets/visibility.png')}/>
            <Text tyle={styles.infoText}> {vis}       </Text>
            <Text style={styles.infoText}> VISIBILITY </Text>
          </View>
          <View style={styles.info}>
            <Image
              style={styles.smallIcon}
              source={require('../assets/wind.jpg')}/>
            <Text tyle={styles.infoText}> {Number((wind_spd).toFixed(2))} m/s</Text>
            <Text style={styles.infoText}> WIND </Text>
          </View>
        </View>
         <View style={styles.extrainfo}>
          <View style={styles.info}>
            <Image
              style={styles.smallIcon}
              source={require('../assets/sunrise.png')}/>
            <Text tyle={styles.infoText}> {sunrise} </Text>
            <Text style={styles.infoText}> SUNRISE </Text>
          </View>
          <View style={styles.info}>
            <Image
              style={styles.smallIcon}
              source={require('../assets/sunset.jpg')}/>
            <Text tyle={styles.infoText}> {sunset} </Text>
            <Text style={styles.infoText}> SUNSET </Text>
          </View>
        </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  infoContainer: {
    alignItems: 'center',
    flex: 1,
    marginTop: 15,
  },
  cityWeatherInfo:{
    alignItems: 'center',
    // backgroundColor: 'white',
    // backgroundColor: 'red',
    marginVertical: 30,
    borderRadius:15,
    borderColor: '#171738ff',
    borderWidth: 2,
    borderStyle:'dotted',
  },
  cityTitle: {
    width:'100%',
    textAlign: 'center',
    fontSize: 30,
    marginTop:20,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 5,
    marginHorizontal:5,
  },
  largeIcon: {
    width:160,
    height:160,
    marginRight: 30,
  },
  currentTemp:{
    fontSize: 32,
  },
   smallIcon: {
    width:50,
    height:50,
    borderRadius: 40/2,
    marginBottom: 5,
  },

  description:{
    textAlign: 'center',
    fontSize: 26,
    marginBottom: 15,
  },
  extrainfo:{
    flexDirection:'row',
    padding:10,
  },
  info:{
    width: Dimensions.get('screen').width/3,
    backgroundColor: 'white',
    padding: 15,
    borderRadius:15,
    borderColor: '#171738ff',
    // borderWidth: 1,
    justifyContent: 'space-around',
    alignItems:'center',
    marginHorizontal: 15,
  },
  infoText: {
    textAlign:'center',
    alignItems: 'center',
  }
});
