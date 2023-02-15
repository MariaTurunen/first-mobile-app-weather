import {StyleSheet, Text, View, Alert, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import Constants from 'expo-constants'

import CurrentWeather from './CurrentWeather'

// https://home.openweathermap.org/api_keys
// ATTENTION! Use your own API KEY, this one is unvalid
const API_KEY = '14752da67975d13814dccbc44f9036e7'

export default Weather = () => {
    // states to loading and setting weatherdata....
    const [weatherData, setWeatherData] = useState(null);
    const [loaded, setLoaded] = useState(null);
    const tempData = {"base": "stations", "clouds": {"all": 0}, "cod": 200, "coord": {"lat": 61.4991, "lon": 23.7871}, "dt": 1676325092, "id": 634963, "main": {"feels_like": -1.99, "humidity": 68, "pressure": 1019, "temp": 1.64, "temp_max": 2.22, "temp_min": 1.2}, "name": "Tampere", "sys": {"country": "FI", "id": 2041582, "sunrise": 1676268964, "sunset": 1676300537, "type": 2}, "timezone": 7200, "visibility": 10000, "weather": [{"description": "clear sky", "icon": "01n", "id": 800, "main": "Clear"}], "wind": {"deg": 340, "speed": 3.6}}

    // function to fetch the weather data from https://www.weatherbit.io
    const fetchWeatherData = async (cityName) => {
      try {
        setLoaded(false);
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`);
        console.log(response.status);
        if (response.status === 200) {
          const data = await response.json();
          console.log(data);
          setWeatherData(data);
        } else {
          setWeatherData(tempData);
          console.log("temp data");
        }
        setLoaded(true);
      }catch (error) {
          Alert.alert('Error', error.message)
      }
    }
    // remember my city name
    useEffect(() => {
      fetchWeatherData('Tampere')
    },[]);

    // Loading message
    if (!loaded) {
      return (
      <View style={styles.appContainer}>
        <View style={styles.errorContent}>
            <Text style={styles.texts}> Loading...</Text>
            <ActivityIndicator size="large" color="blue" />
          </View>
      </View>
    )
    }else if (weatherData === tempData) {
        return (
            <View style={styles.appContainer}>
              <View style={styles.errorContent}>
                <Text style={styles.texts}> City not Found</Text>
                </View>
            </View>
        )
    }
    // basic view
    return (
      <View style={styles.appContainer}>
        <View style={styles.content}>
          <CurrentWeather weatherData={weatherData} fetchWeatherData={fetchWeatherData}/>
          </View>
      </View>

    )
}
// style the items
// colors;
// --cultured: #EEEEEEff; Searchbar background
// --space-cadet: #171738ff; Header background
// --pale-cerulean: #a5c4d4ff; Container background
const styles = StyleSheet.create({
  // background and statusbarheight
  appContainer: {
    flex: 1,
    backgroundColor: 'white',
    //  Takes Phone statusbar height
    paddingTop: Constants.statusBarHeight,
  },
  // Loading and error content style
  errorContent: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#a5c4d4',
    paddingTop:100,
  },
  texts: {
    fontSize:30,
    paddingBottom: 20,
  },
  content: {
    flex: 1,
    backgroundColor: '#a5c4d4',
  },

});
