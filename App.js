import { StyleSheet, View, ScrollView, } from 'react-native';
import Weather from './src'

export default function App() {
  return (
    <View style={styles.appContainer}>
      <ScrollView>
      <Weather />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 8,
    padding:5,
  },
});