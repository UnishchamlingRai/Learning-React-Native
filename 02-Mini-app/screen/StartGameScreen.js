import React, { useState } from "react";
import {
  Alert,
  Button,
  Dimensions,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Colors from "../constants/Colors";

const StartGameScreen = ({ onSetUserNumber }) => {
  const [inputedNumber, setInputedNumber] = useState("");
  const { height, width } = useWindowDimensions();
  function handelEnteredNumber(enterdValue) {
    setInputedNumber(enterdValue);
  }
  function resetHandler() {
    setInputedNumber("");
  }
  function confirmInputHandler() {
    const chooseNumber = parseInt(inputedNumber);
    if (isNaN(chooseNumber) || chooseNumber <= 0 || chooseNumber > 99) {
      Alert.alert("Invalid Number", "Number has to be between 1 to 99", [
        { text: "Okey", style: "destructive", onPress: resetHandler },
      ]);
      return;
    }
    onSetUserNumber(chooseNumber);
    console.log("hello");
  }
  const marginTop = height < 400 ? 10 : 100;
  return (
    <ScrollView style={styles.screen}>
      <KeyboardAvoidingView style={styles.screen} behavior="position">
        <View style={[styles.inputContainer, { marginTop: marginTop }]}>
          <TextInput
            maxLength={2}
            style={styles.inputNumber}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            value={inputedNumber}
            onChangeText={handelEnteredNumber}
          />
          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={resetHandler}>Reset</PrimaryButton>
            </View>
            <View style={styles.buttonContainer}>
              <PrimaryButton onPress={confirmInputHandler}>
                {" "}
                Conform
              </PrimaryButton>
            </View>
          </View>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default StartGameScreen;
const deviceHeight = Dimensions.get("window").height;
console.log(deviceHeight);
const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  inputContainer: {
    // marginTop: deviceHeight < 400 ? 10 : 100,
    marginHorizontal: 24,
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary400,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  inputNumber: {
    padding: 16,
    fontSize: 32,
    color: Colors.accent500,
    borderBottomWidth: 4,
    borderBottomColor: Colors.accent500,
    width: 100,
    textAlign: "center",
    // backgroundColor: "white",
  },
  buttonsContainer: {
    flexDirection: "row",
    marginVertical: 20,
    width: "90%",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "blue",
  },
  buttonContainer: {
    flex: 1,
  },
});
