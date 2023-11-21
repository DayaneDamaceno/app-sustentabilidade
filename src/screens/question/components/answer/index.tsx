import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { correctAnswer } from "../../../../models/answerCount";
import * as Font from "expo-font";

interface AnswerProps {
  onNext: () => void;
  lastAnswerWasCorrect?: boolean;
  currentIndex: number;
}

export const Answer: React.FC<AnswerProps> = ({
  onNext,
  lastAnswerWasCorrect,
}) => {
  const containerBackgroundColor = lastAnswerWasCorrect ? "#EBFFDF" : "#FFC0CB";
  const buttonColor = lastAnswerWasCorrect ? "#BDFF95" : "#FF6B6B";
  const [fontsLoaded, setFontsLoaded] = useState(false);

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
    <View
      style={[styles.container, { backgroundColor: containerBackgroundColor }]}
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  texttitle: {
    fontFamily: "Kanit-Bold",
    marginTop: "50%",
    fontSize: 20,
    textAlign: "center",
  },
  text: {
    marginTop: "5%",
    fontSize: 20,
    textAlign: "center",
  },
  next: {
    marginTop: 100,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 20,
    boxShadow: "0px 7px 7px rgba(0, 0, 0, 0.35) inset",
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
