import {StyleSheet, Text, View, Alert, ActivityIndicator } from 'react-native'
import React, {useState, useEffect} from 'react'
import Constants from 'expo-constants'

import WeatherInfo from './weatherInfo'
import Header from './header'

// API key from https://www.weatherbit.io/api/weather-current
const API_KEY = '530b567c8d884a92805d47dba3b9174d'

export default Weather = () => {
    // states to loading and setting weatherdata....
    const [weatherData, setWeatherData] = useState(null);
    const [loaded, SetLoaded] = useState(null);

    // function to fetch the weather data from https://www.weatherbit.io
    const fetchWeatherData = async (cityName) => {
      try {
        SetLoaded(false);
        const response = await fetch(`https://api.weatherbit.io/v2.0/current?city=${cityName}&key=${API_KEY}`);
        console.log(response.status);
        ;if (response.status === 200) {
          const data = await response.json();
          console.log(data);
          setWeatherData(data);
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
      fetchWeatherData('Tampere')
    },[]);

    // Loading message
    if (!loaded) {
      return (
      <View style={styles.container}>
        <Header></Header>
        <View style={styles.content}>
            <Text style={styles.texts}> Loading...</Text>
            <ActivityIndicator size="large" color="blue" />
          </View>
      </View>
    )
    }else if (weatherData === null) {
        return (
            <View style={styles.container}>
              <Header></Header>
                <Text style={styles.texts}> City not Found</Text>
            </View>
        )
    }
    // basic view
    return (
      <View style={styles.container}>
        <Header weatherData={weatherData}></Header >
        <View style={styles.weatherInfoContainer}>
          <WeatherInfo weatherData={weatherData} fetchWeatherData={fetchWeatherData}/>
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
    container: {
      flex: 1,
      backgroundColor: '#a5c4d4',
      //  Takes Phone statusbar height
      paddingTop: Constants.statusBarHeight,
    },
    header: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#171738ff',
      height: 80,
      justifyContent: 'center',
    },
        headerTitle: {
          fontSize: 28,
          fontWeight: 'bold',
          color:'white'
        },
    content: {
      flex: 1,
      alignItems: 'center',
      paddingTop:10,
    },
        texts: {
          fontSize:20,
        },
    weatherInfoContainer: {
      flex: 5,
    }
  });
