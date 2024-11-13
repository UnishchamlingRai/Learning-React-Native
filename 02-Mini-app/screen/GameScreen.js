import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import Title from "../components/Title";
import GuessNumberContainer from "../components/GuessNumberContainer";
import { Entypo } from "@expo/vector-icons";
function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

const GameScreen = ({ userNumber }) => {
  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuessNumber, setCurrentGuessNumber] = useState(initialGuess);
  const { width, height } = useWindowDimensions();
  let content = (
    <>
      <Title>
        Opponent's Guess <Entypo name="facebook" size={24} color="black" />
      </Title>
    </>
  );
  if (height < 400) {
    content = <Text>Hello</Text>;
  }
  return (
    <View style={styles.container}>
      {content}
      <GuessNumberContainer num={currentGuessNumber} />
      <View>
        <Text>87</Text>
      </View>
      <View>
        <Text>Higher or Lower</Text>
      </View>
      <Text>Guess Numbers</Text>
    </View>
  );
};

export default GameScreen;
const deviceWith = Dimensions.get("window").width;
// console.log(deviceWith);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: deviceWith > 400 ? "center" : "",
  },
});
