import React from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import * as actions from "../Redux/Actions";

class AuthScreen extends React.Component {
  componentDidMount() {
    this.props.facebookLogin();
    this.onAuthComplete(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.onAuthComplete(nextProps);
  }

  onAuthComplete(props) {
    if (props.token) {
      this.props.navigation.navigate("Main");
    }
  }

  render() {
    return <View />;
  }
}

function mapStateToProps({ auth }) {
  return { token: auth.token };
}

export default connect(
  mapStateToProps,
  actions
)(AuthScreen);
