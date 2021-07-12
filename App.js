import React from 'react';
import { StyleSheet, View } from 'react-native';
import Weather  from './components/Weather';
import constants from 'picomatch/lib/constants';



export default function App() {
  return (
      <View style={styles.container}>
          <Weather zipCode="90110"/>
          <StatusBar style="auto" />
      </View>
 );
}


const styles = StyleSheet.create({
    container: {
      paddingTop: constants.StatusBarHeight
  },
});
