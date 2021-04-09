import { StyleSheet } from "react-native";
import { STATUSBAR_HEIGHT } from "../constants";

export default StyleSheet.create({
  wrapper: {
    position: "absolute",
    top: STATUSBAR_HEIGHT,
    left: 0,
    width: "100%",
  },
});
