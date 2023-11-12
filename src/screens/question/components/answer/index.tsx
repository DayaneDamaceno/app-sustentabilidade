import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { correctAnswer } from "../../../../models/answerCount";

interface AnswerProps {
  onNext: () => void;
  lastAnswerWasCorrect?: boolean;
}

export const Answer: React.FC<AnswerProps> = ({ onNext, lastAnswerWasCorrect }) => {
  const containerBackgroundColor = lastAnswerWasCorrect ? "#EBFFDF" : "#FFC0CB";
  const buttonColor = lastAnswerWasCorrect ? "#BDFF95" : "#FF6B6B";

  const handleNext = () => {
    onNext();
    if (lastAnswerWasCorrect) {
      correctAnswer.count += 1;
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: containerBackgroundColor }]}>
      <Text style={[styles.text, styles.header]}>
        {lastAnswerWasCorrect ? "Muito bom!!" : "Vamos melhorar"}
      </Text>
      <Text style={styles.text}>
        {lastAnswerWasCorrect
          ? "Você está ajudando a salvar o planeta!"
          : "Juntos podemos salvar o planeta!"}
      </Text>
      <TouchableOpacity style={[styles.next, { backgroundColor: buttonColor }]} onPress={handleNext}>
        <Text style={styles.button}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
  },
  next: {
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 20,
    width: "70%",
    height: 80,
    marginTop: 20,
    borderTopColor: "#000000",
    borderWidth: 3,
  },
  header: {
    fontWeight: "bold",
    fontSize: 35,
    textAlign: "center",
  },
  button: {
    alignSelf: "center",
    marginTop: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
});