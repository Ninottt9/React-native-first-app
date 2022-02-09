// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  View, Image, ImageBackground, StyleSheet, StatusBar
} from 'react-native';

// View -> UIView
export default function App() {

  return (
    <ImageBackground source={require('./assets/background.jpg')} style={{ width: '100%', height: '100%', flex: 1 }}>
      <Image source={require('./assets/logo-red.png')} style={{ width: 100, height: 100, alignContent: 'center' }} />
    </ImageBackground>
  );
}


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "white",
//     paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
//     // alignItems: 'center',
//     // justifyContent: 'center',
//   },
// });
