import {StyleSheet, Text, View, Alert, } from 'react-native'
// import React, {useState, useEffect} from 'react'
import Constants from 'expo-constants'

export default SettingsScreen = () => {

  return (
    <View style = {styles.appContainer}>
      <Text > settings</Text>
    </View>

  )
}
const styles = StyleSheet.create({
  // background and statusbarheight
  appContainer: {
    flex: 1,
    backgroundColor: 'white',
    //  Takes Phone statusbar height
    paddingTop: Constants.statusBarHeight,
  },
});