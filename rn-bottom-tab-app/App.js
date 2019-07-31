import React from "react";
import { StyleSheet, View } from "react-native";
//import { Provider } from "react-redux";
import AppNavigator from "./src/navigation/AppNavigator";
//import store from "./src/Redux/Store";

export default function App() {
  return (
    <View style={styles.container}>
      <AppNavigator />
    </View>

    // REDUX
    /*
    <Provider store={store}>
      <View style={styles.container}>
        <AppNavigator />
      </View>
    </Provider>
    */
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});
