import { Platform } from "react-native";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
//import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from "../screens/HomeScreen";
import SecondScreen from "../screens/SecondScreen";
import ThirdScreen from "../screens/ThirdScreen";

const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home"
};
HomeStack.path = "";

const SecondScreenStack = createStackNavigator(
  {
    Second: SecondScreen
  },
  config
);

SecondScreenStack.navigationOptions = {
  tabBarLabel: "SecondScreen"
};

SecondScreenStack.path = "";

const ThirdScreenStack = createStackNavigator(
  {
    Third: ThirdScreen
  },
  config
);

ThirdScreenStack.navigationOptions = {
  tabBarLabel: "Third Screen"
};

ThirdScreenStack.path = "";

const TabNavigator = createBottomTabNavigator({
  HomeStack,
  SecondScreenStack,
  ThirdScreenStack
});

TabNavigator.path = "";

export default TabNavigator;
