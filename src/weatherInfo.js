import { Text, View, StyleSheet, SafeAreaView, Image, Dimensions } from 'react-native'
import React from 'react'
import WeatherSearch from './search'


export default WeatherInfo =({weatherData, fetchWeatherData}) => {
  const {
    data: [{
        sunrise,
        sunset,
        city_name,
        temp,
        wind_spd,
        app_temp,
        rh,
        vis,
        weather: {description, icon}}]

    // name,
    // visibility,
    // weather:[ {icon, description }],
    // main: {temp, humidity, feels_like, },
    // wind: {speed},
    // sys: {sunrise, sunset},

  } = weatherData;

  return (
    <SafeAreaView style={styles.container}>
    <WeatherSearch fetchWeatherData= {fetchWeatherData}/>
        <View>
          <Text style={styles.title}> {city_name} </Text>
        </View>

        <View style={styles.logo}>
          <Image
            style={styles.largeIcon}
            source={{uri:`https://www.weatherbit.io/static/img/icons/${icon}.png`}}
          />
          <Text tyle={styles.currentTemp}> {temp} °C </Text>
        </View>

          <Text style={styles.description}> {description} </Text>

        <View style={styles.extrainfo}>
          <View style={styles.info}>
            <Image
              style={styles.smallIcon}
              source={require('../assets/temp.jpg')}
            />
            <Text tyle={styles.infoText}> {app_temp} °C </Text>
            <Text style={styles.infoText}> FEELS LIKE </Text>
          </View>

          <View style={styles.info}>
            <Image
              style={styles.smallIcon}
              source={require('../assets/humidity.png')}
            />
            <Text tyle={styles.infoText}> {rh} % </Text>
            <Text style={styles.infoText}> HUMIDITY </Text>
          </View>
          </View>
          <View style={styles.extrainfo}>
          <View style={styles.info}>
            <Image
              style={styles.smallIcon}
              source={require('../assets/visibility.png')}
            />
            <Text tyle={styles.infoText}> {vis}       </Text>
            <Text style={styles.infoText}> VISIBILITY </Text>
          </View>

          <View style={styles.info}>
            <Image
              style={styles.smallIcon}
              source={require('../assets/wind.jpg')}
            />
            <Text tyle={styles.infoText}> {wind_spd} m/s</Text>
            <Text style={styles.infoText}> WIND </Text>
          </View>
        </View>
         <View style={styles.extrainfo}>
          <View style={styles.info}>
            <Image
              style={styles.smallIcon}
              source={require('../assets/sunrise.png')}
            />
            <Text tyle={styles.infoText}> {sunrise} </Text>
            <Text style={styles.infoText}> SUNRISE </Text>
          </View>

          <View style={styles.info}>
            <Image
              style={styles.smallIcon}
              source={require('../assets/sunset.jpg')}
            />
            <Text tyle={styles.infoText}> {sunset} </Text>
            <Text style={styles.infoText}> SUNSET </Text>
          </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    marginTop: 15,
  },
  title: {
    width:'100%',
    textAlign: 'center',
    fontSize: 24,
    color:'#C5DF2',
    marginTop:10,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 5,
  },
  largeIcon: {
    width:180,
    height:180,
  },
   smallIcon: {
    width:50,
    height:50,
    borderRadius: 40/2,
    marginBottom: 5,
  },
  currentTemp:{
    alignItems: 'center',
    padding: 15,
    fontSize: 28,
  },
  description:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'italic',
    padding: 8,
  },
  extrainfo:{
    flexDirection:'row',
    justifyContent: 'space-around',
    padding:10,
    gap: 15,
  },
  info:{
    width: Dimensions.get('screen').width/3,
    // width: 50,
    backgroundColor: 'white',
    padding: 10,
    borderRadius:15,
    justifyContent: 'space-around',
    alignItems:'center',
  },
  infoText: {
    textAlign:'center',
    paddingTop: 5,
  }


});
