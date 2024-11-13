import React, { useState } from "react";
import {
  View,
  Text,
  // https://github.com/academind/react-native-practical-guide-code.git
  StyleSheet,
  Button,
  ImageBackground,
  SafeAreaView,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import StartGameScreen from "./screen/StartGameScreen";
import GameScreen from "./screen/GameScreen";
import Colors from "./constants/Colors";

const App = () => {
  const [userNumber, setUserNumber] = useState();

  let screen;
  screen = <StartGameScreen onSetUserNumber={setUserNumber} />;
  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} />;
  }
  return (
    <LinearGradient
      style={styles.rootScreen}
      colors={[Colors.primary500, Colors.accent500]}
    >
      <ImageBackground
        style={styles.rootScreen}
        resizeMode="cover"
        source={require("./asstes/images/backgroundImage.jpg")}
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

export default App;

const styles = StyleSheet.create({
  rootScreen: {
    paddingTop: 30,
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});
