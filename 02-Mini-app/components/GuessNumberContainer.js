import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

const GuessNumberContainer = ({ num }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{num}</Text>
    </View>
  );
};

export default GuessNumberContainer;
const styles = StyleSheet.create({
  container: {
    padding: 24,
    borderWidth: 4,
    borderColor: Colors.accent500,
    marginHorizontal: 24,
    marginVertical: 16,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 36,
    fontWeight: "bold",
    color: Colors.accent500,
  },
});
