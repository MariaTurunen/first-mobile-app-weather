import {StyleSheet, Text, View, Alert, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import Constants from 'expo-constants'
import WeatherInfo from './weatherInfo'

// API key from https://www.weatherbit.io/api/weather-current
const API_KEY = '530b567c8d884a92805d47dba3b9174d'
//
// TODO:....
//scroll down does not work.
// Search city not found, API used for the day?
// CSS: gap between icons

export default Weather = () => {
    // states to loading and setting weatherdata....
    const [weatherData, setWeatherData] = useState(null);
    const [loaded, SetLoaded] = useState(null);

    // function to fetch the weather data from https://www.weatherbit.io
    const fetchWeatherData = async (cityName) => {
      try {
        SetLoaded(false);
        const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${cityName}&key=${API_KEY}`);
        if (response.status === 200) {
          const data = await response.json();
          setWeatherData(data);
          console.log(data)
        } else {
          setWeatherData(null);
        }
        SetLoaded(true);
      }catch (error) {
          Alert.alert('Error', error.message)
      }
    }
    // remember my city name
    useEffect(() => {
      fetchWeatherData('London')
    },[]);

    // Loading message
    if (!loaded) {
      return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}> Weather App</Text>
        </View>
        <View style={styles.content}>
            <Text style={styles.texts}> Loading...</Text>
            <ActivityIndicator size="large" color="blue" />
          </View>
      </View>
    )
    }else if (weatherData=== null) {
        return (
            <View style={styles.container}>
                <Text> City not Found</Text>
            </View>

        )
    }


    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}> Weather App</Text>
        </View>
        <WeatherInfo weatherData={weatherData} fetchWeatherData={fetchWeatherData}/>
      </View>
    )
}
// style the items
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FCF5D',
      paddingTop: Constants.statusBarHeight,

    },
    header: {
      alignItems: 'center',
      backgroundColor: '#C5D2',
      height: 80,
      justifyContent: 'center',
    },
    headerTitle: {
      fontSize: 28,
      fontWeight: 'bold',
    },
    content: {
      alignItems: 'center',
      paddingTop:10,

    },
    texts: {
      fontSize:20,
    }
  });
