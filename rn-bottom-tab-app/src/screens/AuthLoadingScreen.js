import React from "react";
import {
  ActivityIndicator,
  //AsyncStorage,
  SafeAreaView,
  Text,
  View
} from "react-native";
//import { connect } from "react-redux";
//import * as actions from "../Redux/Actions";

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    //this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  /*
  _bootstrapAsync = async () => {
    const userToken = await AsyncStorage.getItem("fb_token");
   
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    this.props.navigation.navigate(userToken ? "Main" : "Auth");
  };
    */

  render() {
    const { container, content } = styles;
    return (
      <SafeAreaView style={container}>
        <View style={content}>
          <Text>AuthLoading Screen</Text>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = {
  coontainer: {
    flex: 1,
    justifyContent: "center"
    //alignItems: "center"
  },
  content: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "black"
  }
};
// no REDUX
export default AuthLoadingScreen;

//REDUX
/*
export default connect(
  null,
  actions
)(AuthLoadingScreen);

*/
