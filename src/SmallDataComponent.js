import { Text, View, StyleSheet, Image, Dimensions } from 'react-native'
import React from 'react'



export default SmallDataComponent =({PictureName, InfoData, InfoText}) => {

  return (
    <View style={styles.info}>
            <Image
              style={styles.smallIcon}
              source={PictureName}/>
            <Text tyle={styles.infoText}> {InfoData} </Text>
            <Text style={styles.infoText}> {InfoText} </Text>
          </View>

  );
}
const styles = StyleSheet.create({
  info:{
    width: Dimensions.get('screen').width/3,
    backgroundColor: 'white',
    padding: 15,
    borderRadius:15,
    borderColor: '#171738ff',
    justifyContent: 'space-around',
    alignItems:'center',
    marginHorizontal: 15,
  },
  smallIcon: {
    width:50,
    height:50,
    borderRadius: 40/2,
    marginBottom: 5,
  },
  infoText: {
    textAlign:'center',
    alignItems: 'center',
  }
});