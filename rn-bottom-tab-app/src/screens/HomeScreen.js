import React from "react";
import { SafeAreaView, Text, View } from "react-native";

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "Home Screen"
  };
  /*
  _deleteToken = () => {
    AsyncStorage.removeItem("fb_token");
  };
  */

  render() {
    const { container, content } = styles;
    return (
      <SafeAreaView style={container}>
        <View style={content}>
          <Text>Home Screen</Text>
          <Text>Home Screen</Text>
          {/*}
            <Button title="Log Out" onPress={this._deleteToken} />
            */}
          <Text>Home Screen</Text>
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
    borderColor: "black",
    marginHorizontal: 10
  }
};
export default HomeScreen;
