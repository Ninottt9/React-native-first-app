// import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet, Text, View, Image, SafeAreaView, Dimensions, Button, Alert, Platform, StatusBar
} from 'react-native';

import { useDeviceOrientation, useDimensions } from '@react-native-community/hooks';



// View -> UIView
export default function App() {

  const { landscape } = useDeviceOrientation();

  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: 'dodgerblue',
        width: '100%',
        height: landscape ? "100" : "30",
      }}></View>
      <Text>HELLO SEREGA, how are you?</Text>
      {/* <Button
        title="Mom, press"
        onPress={() => Alert.alert("Wow, you clicked??", "You happy?", [
          { text: "Yes" },
          { text: "Yes" },
        ])}
      /> */}
    </SafeAreaView >
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
