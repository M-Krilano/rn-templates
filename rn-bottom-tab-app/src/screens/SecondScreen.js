import React from "react";
import { SafeAreaView, Text, View } from "react-native";

class SecondScreen extends React.Component {
  static navigationOptions = {
    title: "Second Screen"
  };
  render() {
    const { container, content } = styles;
    return (
      <SafeAreaView style={container}>
        <View style={content}>
          <Text>Second Screen</Text>
          <Text>Second Screen</Text>
          <Text>Second Screen</Text>
          <Text>Second Screen</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = {
  coontainer: {
    flex: 1
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black"
  }
};
export default SecondScreen;
