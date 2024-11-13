import React from "react";
import { Platform, StyleSheet, Text } from "react-native";

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>;
};
export default Title;

const styles = StyleSheet.create({
  title: {
    padding: 12,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    // fontFamily: "open-sans-bold",
    // borderWidth: Platform.OS === "android" ? 0 : 2,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: "white",
    color: "white",
    marginHorizontal: 16,
    borderRadius: 10,
    width: 800,
    maxWidth: "80%",
  },
});
