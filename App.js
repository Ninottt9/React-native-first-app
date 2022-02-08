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
      flexDirection: "row", //horizontal main axis
      justifyContent: "center", //main axis
      alignItems: "center", //secondary axis
      alignContent: "center",
      // flexWrap: "wrap", //wraps for each line along the secondary axis
    }}
    >
      <View
        style={{
          backgroundColor: "dodgerblue",
          // flexBasis: 100, //width or heigth depending on the main axis
          flex: -1,
          width: 400,
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
