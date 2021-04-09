import { getStatusBarHeight } from "react-native-iphone-x-helper";

export const STATUSBAR_HEIGHT = getStatusBarHeight(true);
export const NOTIFICATION_BEHAVIOUR = {
  SWIPE: "swipe",
  CLEAR: "clear",
  OVER: "over",
};
export const DISTANCE = {
  FROM: -150,
  TO: 0,
};
