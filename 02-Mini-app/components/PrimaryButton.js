import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import Colors from "../constants/Colors";

const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        onPress={onPress}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: Colors.primary400 }}
      >
        <Text style={styles.text}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    margin: 4,
    elevation: 10,
    backgroundColor: Colors.primary700,
    borderRadius: 30,
    // shadowColor: "red",
  },
  buttonInnerContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    // borderRadius: 8,

    // shadowColor: "red",
  },
  text: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
