import { Text, View, StyleSheet, SafeAreaView, Image, Dimensions } from 'react-native'
import React from 'react'
import images from './Images';
import WeatherSearch from './WeatherSearch'
import SmallDataComponent from './SmallDataComponent'

export default CurrentWeatherScreen =({weatherData, fetchWeatherData}) => {
  const {
        sys: { sunrise, sunset,}, name, main: { temp, humidity, feels_like,
        }, wind: {speed,}, visibility, weather: [{description, icon}],
  } = weatherData


  return (
    <SafeAreaView style={styles.infoContainer}>
    <WeatherSearch fetchWeatherData= {fetchWeatherData}/>
        <View style={styles.cityWeatherInfo}>
          <Text style={styles.cityTitle}> {name} </Text>
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
  description:{
    textAlign: 'center',
    fontSize: 26,
    marginBottom: 15,
  },
  extrainfo:{
    flexDirection:'row',
    padding:10,
  },


});
