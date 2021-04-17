import { StyleSheet } from "react-native";
import { STATUSBAR_HEIGHT } from "../constants";

export default StyleSheet.create({
  wrapper: {
    position: "absolute",
    zIndex: 99,
    top: STATUSBAR_HEIGHT + 15,
    left: 0,
    width: "100%",
  },
});
