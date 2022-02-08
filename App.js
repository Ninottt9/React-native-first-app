// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, TouchableNativeFeedback, Button, Alert, Platform, StatusBar } from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

// View -> UIView
export default function App() {

  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <Button
        // backgroundColor="orange"
        color="orange"
        title="Click me"
        onPress={() => Alert.alert("Alert!", "Sergeii!!", [
          { text: "Yes", onPress: () => console.log("Yes") },
          { text: "No", onPress: () => console.log("No") },
        ])
        }
      />
    </SafeAreaView >
  );
}

const containerStyle = { backgroundColor: "orange" };


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
  },
});
