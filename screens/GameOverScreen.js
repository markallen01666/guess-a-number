import React from "react";
import { View, StyleSheet, Button, Image } from "react-native";

import TitleText from "../components/TitleText";
import BodyText from "../components/BodyText";

const GameOverScreen = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/success.png")}
          style={styles.image}
          resize="cover"
          fadeDuration={1000}
        />
      </View>
      <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
      <BodyText>Number chosen was: {props.userChoice}</BodyText>
      <View style={styles.buttonContainer}>
        <Button title="NEW GAME" onPress={props.onRestart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  buttonContainer: {
    marginTop: 20
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderWidth: 5,
    borderRadius: 300/2,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 20
  },
  image: {
    width: "100%",
    height: "100%"
  }
});

export default GameOverScreen;
