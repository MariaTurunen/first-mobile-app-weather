import { View, Text, StyleSheet, StatusBar} from "react-native";

export default ForecastList = ({time, description, temperature}) => {
  return (
      <View style= {styles.container}>
        <Text style= {styles.item}>{time} {temperature} {description}  HERE COMES PICTURE</Text>
      </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 8,
  },
  item: {
    backgroundColor: 'white',
    padding: 25,
    borderRadius:15,
    borderColor: '#171738ff',
    marginVertical: 2,
    marginHorizontal: 8,
  },

});
