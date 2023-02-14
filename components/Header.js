import {StyleSheet, Text, View,} from 'react-native'
// import React, {useState, useEffect} from 'react'

export default Header = () => {

    return (
        <View style={styles.header}>
          <Text style={styles.headerTitle}> Weather App </Text>
        </View>

    )
}
const styles = StyleSheet.create({
  header: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#171738ff',
    height: 80,
    justifyContent: 'center',
    borderRadius:15,
    margin: 5,
    },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color:'white'
    },
})