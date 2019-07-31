import React from "react";
import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
//import { window } from "../constants/Layouts";
//const { SCREEN_HEIGHT, SCREEN_WIDTH } = window;

class WelcomeScreen extends React.Component {
  render() {
    const { container, content } = styles;
    const { navigate } = this.props.navigation;
    return (
      <SafeAreaView style={container}>
        <View style={content}>
          <Text>Welcome to "Some" App</Text>

          <TouchableOpacity
            onPress={() => {
              navigate("AuthLoading");
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 20,
                width: 80,
                borderWidth: 1,
                borderRadius: 5,
                borderColor: "black"
              }}
            >
              <Text> Log In </Text>
            </View>
          </TouchableOpacity>
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
export default WelcomeScreen;
