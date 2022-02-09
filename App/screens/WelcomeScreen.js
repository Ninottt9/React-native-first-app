import React from 'react';
import {
  View, Image, ImageBackground, StyleSheet, Text
} from 'react-native';

function WelcomeScreen(props) {
  return (
    <ImageBackground
      source={require('../assets/background.jpg')}
      style={styles.background}
    >
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo-red.png')} style={styles.logo} />
        <Text style={styles.text}>Sell What You Don't Need</Text>
      </View>

      <View style={styles.loginButton}></View>
      <View style={styles.registerButton}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  loginButton: {
    backgroundColor: "#fc5c65",
    width: '1000%',
    height: 70,
  },
  registerButton: {
    backgroundColor: "#4ECDC4",
    width: '100%',
    height: 70,
  },
  logo: {
    height: 100,
    width: 100,
  },
  logoContainer: {
    position: 'absolute',
    top: 70,
    alignItems: 'center',
  },
})

export default WelcomeScreen;
