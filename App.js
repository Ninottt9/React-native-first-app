// import { StatusBar } from 'expo-status-bar';
import {
  View, StyleSheet, StatusBar
} from 'react-native';

// View -> UIView
export default function App() {

  return (
    <View style={{
      backgroundColor: "#fff",
      flex: 1,
      flexDirection: "row",
    }}>
      <View
        style={{
          backgroundColor: "dodgerblue",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "gold",
          width: 100,
          height: 100,
        }}
      />
      <View
        style={{
          backgroundColor: "tomato",
          width: 100,
          height: 100,
        }}
      />
    </View>
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
