import { createBrowserApp } from "@react-navigation/web";
import { createSwitchNavigator } from "react-navigation";
import TabNavigator from "./MainBottomTabNavigator";

const switchNavigator = createSwitchNavigator({
  //Welcome: WelcomeScreen,
  //AuthLoading: AuthLoadingScreen,
  //Auth: AuthScreen,
  Main: TabNavigator
});
switchNavigator.path = "";

export default createBrowserApp(switchNavigator, { history: "hash" });
