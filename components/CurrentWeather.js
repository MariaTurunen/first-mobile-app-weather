import { Text, View, StyleSheet, SafeAreaView, Image, ScrollView } from 'react-native'
import React from 'react'
import { useState,useEffect } from 'react';
import images from './Images';
import WeatherSearch from './WeatherSearch'
import SmallDataComponent from './SmallDataComponent'
import Header from './Header'

export default CurrentWeather =({weatherData, fetchWeatherData}) => {
  const {
        sys: { sunrise, sunset,}, name, main: { temp, humidity, feels_like,
        }, wind: {speed,}, visibility, weather: [{description, icon}],
  } = weatherData

  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes

    setCurrentTime(
      hours + ':' + min
    );
  }, []);

  return (
    <SafeAreaView>
      <ScrollView>
      <Header/>
      <WeatherSearch fetchWeatherData= {fetchWeatherData}/>
        <View style={styles.cityWeatherInfoBox}>
          <Text style={styles.cityTitle}> {name}   {currentTime}</Text>
            <View style={styles.logo}>
              <Image
                style={styles.largeIcon}
                source={{uri:`https://openweathermap.org/img/wn/${icon}@4x.png`}}/>
              <Text style={styles.currentTemp}> {Number((temp).toFixed(1))} °C </Text>
            </View>
          <Text style={styles.description}> {description.charAt(0).toUpperCase() + description.slice(1)} </Text>
        </View>

        <View style={styles.extrainfo}>
          <SmallDataComponent
          PictureName={images.assets.temp}
          InfoData={Number((feels_like).toFixed(1)) + ' °C'}
          InfoText={'FEELS LIKE'}/>
          <SmallDataComponent
          PictureName={images.assets.humidity}
          InfoData={humidity + ' %'}
          InfoText={'HUMIDITY'}/>
        </View>

        <View style={styles.extrainfo}>
          <SmallDataComponent
          PictureName={images.assets.visibility}
          InfoData={visibility + ' m'}
          InfoText={'VISIBILITY'}/>

          <SmallDataComponent
          PictureName={images.assets.wind}
          InfoData={speed + ' m/s'}
          InfoText={'WIND'}/>
        </View>

        <View style={styles.extrainfo}>
          <SmallDataComponent
          PictureName={images.assets.sunrise}
          InfoData={new Date(sunrise * 1000).toLocaleTimeString("fi-FI")}
          InfoText={'SUNRISE'}/>

          <SmallDataComponent
          PictureName={images.assets.sunset}
          InfoData={new Date(sunset * 1000).toLocaleTimeString("fi-FI")}
          InfoText={'SUNSET'}/>
        </View>
        </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  cityWeatherInfoBox:{
    alignItems: 'center',
    marginVertical: 20,
    borderRadius:15,
    borderColor: '#171738ff',
    borderWidth: 2,
    borderStyle:'dotted',
    margin:8,
  },
  cityTitle: {
    textAlign: 'center',
    fontSize: 30,
    marginTop:10,
  },
  logo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 5,
    marginHorizontal:2,
  },
  largeIcon: {
    width:160,
    height:160,
    marginRight: 30,
  },
  currentTemp:{
    fontSize: 32,
  },
  description:{
    textAlign: 'center',
    fontSize: 26,
    paddingBottom: 15,
  },
  extrainfo:{
    flexDirection:'row',
    padding:10,
  },
});
