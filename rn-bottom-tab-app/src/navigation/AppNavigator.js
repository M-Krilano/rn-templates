import { createAppContainer, createSwitchNavigator } from "react-navigation";
//import AuthLoadingScreen from "../screens/AuthLoadingScreen";
//import AuthScreen from "../screens/AuthScreen";
//import WelcomeScreen from "../screens/WelcomeScreen";
import TabNavigator from "./MainBottomTabNavigator";

export default createAppContainer(
  createSwitchNavigator(
    {
      //Welcome: WelcomeScreen,
      //Auth: AuthScreen,
      //AuthLoading: AuthLoadingScreen,
      Main: TabNavigator
    },
    {
      initialRouteName: "Main"
    }
  )
);
