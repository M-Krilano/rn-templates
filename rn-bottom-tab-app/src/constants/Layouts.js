import { Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

export default {
  window: {
    SCREEN_WIDTH,
    SCREEN_HEIGHT
  },
  isSmallDevice: SCREEN_WIDTH < 375
};
