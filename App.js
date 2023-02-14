import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import ForecastScreen from './components/ScreenForecast';
import SettingsScreen from './components/ScreenSettings';
import WeatherScreen from './components/ScreenWeather';

const Tab = createMaterialBottomTabNavigator();

export default  App = () => {

  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Current Weather" component={WeatherScreen} />
        <Tab.Screen name="Forecast" component={ForecastScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

