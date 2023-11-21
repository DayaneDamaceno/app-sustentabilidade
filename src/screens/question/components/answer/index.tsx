import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from "react-native";
import { correctAnswer } from "../../../../models/answerCount";
import * as Font from "expo-font";
import { LinearGradient } from 'expo-linear-gradient';

interface AnswerProps {
  onNext: () => void;
  lastAnswerWasCorrect?: boolean;
  currentIndex: number;
}

export const Answer: React.FC<AnswerProps> = ({
  onNext,
  lastAnswerWasCorrect,
}) => {
  const buttonColor = lastAnswerWasCorrect ? "#BDFF95" : "#FF6B6B";
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const backgroundImageCorrect = require("../../../../../assets/Images/Jacarezin.png");
  const backgroundImageIncorrect = require("../../../../../assets/Images/Error.png");

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Jomhuria-Regular": require("../../../../../assets/fonts/jomhuria/Jomhuria-Regular.ttf"),
        "Kanit-Bold": require("../../../../../assets/fonts/kanit/Kanit-Bold.ttf"),
        "Kanit-Regular": require("../../../../../assets/fonts/kanit/Kanit-Regular.ttf"),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const handleNext = () => {
    onNext();
    if (lastAnswerWasCorrect) {
      correctAnswer.count += 1;
    }
  };

  return (
    <ImageBackground
    source={lastAnswerWasCorrect ? backgroundImageCorrect : backgroundImageIncorrect}
    style={[styles.imageBackground]}
  >
    <View
      style={styles.container}
    >
      <Text style={[styles.texttitle, styles.header]}>
        {lastAnswerWasCorrect ? "Muito bom!!" : "Vamos melhorar"}
      </Text>
      <Text style={styles.text}>
        {lastAnswerWasCorrect
          ? "Você está ajudando a salvar o planeta!"
          : "Juntos podemos salvar o planeta!"}
      </Text>
      <TouchableOpacity
        style={[styles.next, { backgroundColor: buttonColor }]}
        onPress={handleNext}
      >
        <Text style={styles.button}>Continue</Text>
      </TouchableOpacity>
    </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  texttitle: {
    fontFamily: "Kanit-Bold",
    marginTop: "20%",
    fontSize: 20,
    textAlign: "center",
  },
  text: {
    marginTop: "5%",
    fontSize: 20,
    textAlign: "center",
  },
  imageBackground: {
    flex: 1,
    alignSelf: "center",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  next: {
    marginTop: "90%",
    justifyContent: "center",
    borderRadius: 20,
    width: "60%",
    height: "8%",
    borderTopColor: "#000000",
    borderWidth: 3,
  },
  header: {
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center",
  },
  button: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
