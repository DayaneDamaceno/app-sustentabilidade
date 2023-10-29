import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

interface AnswerProps {
  onNext: () => void;
  lastAnswerWasCorrect?: boolean;
}

export const Answer: React.FC<AnswerProps> = ({
  onNext,
  lastAnswerWasCorrect,
}) => {
  return (
    <>
      <Text style={[styles.text, styles.header]}>
        {lastAnswerWasCorrect ? "Muito bom!!" : "Vamos melhorar"}
      </Text>
      <Text style={styles.text}>
        {lastAnswerWasCorrect
          ? "Você esta ajudando a salvar o planeta!"
          : "Juntos podemos salvar o planeta!"}
      </Text>
      <TouchableOpacity style={styles.next} onPress={onNext}>
        <Text style={styles.button}>Continue</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
  },
  next: {
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: "#BDFF95",
    borderRadius: 20,
    width: "70%",
    height: 80,
    marginTop: 20,
    borderTopColor: "#000000",
    borderWidth: 3,
  },
  header: {
    alignItems: "center",
    marginTop: "50%",
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
