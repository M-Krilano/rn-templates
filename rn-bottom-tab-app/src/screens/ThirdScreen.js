import React from "react";
import { SafeAreaView, Text, View } from "react-native";

class ThirdScreen extends React.Component {
  static navigationOptions = {
    title: "Third Screen"
  };
  render() {
    const { container, content } = styles;
    return (
      <SafeAreaView style={container}>
        <View style={content}>
          <Text>Third Screen</Text>
          <Text>Third Screen</Text>
          <Text>Third Screen</Text>
          <Text>Third Screen</Text>
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
export default ThirdScreen;
