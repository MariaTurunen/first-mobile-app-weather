import { StyleSheet, View, ScrollView, } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Weather from './src/index';
import Header from './src/Header';
import CurrentWeatherScreen from './src/CurrentWeatherScreen';
import TestScreen from './src/TestScreen';
import ForecastScreen from './src/ForecastScreen';
import SettingsScreen from './src/SettingsScreen';


const Tab = createMaterialBottomTabNavigator();


export default  App = () => {
  return (
    <View style={styles.appContainer}>
      <ScrollView>
      <Header style={styles.header}/>


      <Weather style={styles.mainContainer}/>

      <NavigationContainer style={styles.navigationContainer}>
      <Tab.Navigator>
      <Tab.Screen name="Current Weather" component={TestScreen} />
      <Tab.Screen name="Forecast" component={ForecastScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
      </NavigationContainer>
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  header:{

  },
  appContainer: {

    justifyContent: 'center',
    paddingTop: 8,
    padding:5,
  },
  mainContainer:{


  },
  navigationContainer: {
    
  },


});