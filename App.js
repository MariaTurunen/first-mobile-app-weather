import { StyleSheet, View, ScrollView, } from 'react-native';
import Weather from './src'

export default function App() {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Weather />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 8,
    padding:5,
  },
});