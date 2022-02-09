// import { StatusBar } from 'expo-status-bar';
import React from 'react';

import WelcomeScreen from './App/screens/WelcomeScreen.js';
import ViewImageScreen from './App/screens/ViewImageScreen.js';

export default function App() {
  return (
    <ViewImageScreen />
    // <ViewImageScreen />
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
