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
      <Text style={styles.text}>
        {lastAnswerWasCorrect ? "Muito bom!!" : "Vamos melhorar"}
      </Text>
      <Text style={styles.text}>
        {lastAnswerWasCorrect
          ? "Você esta ajudando a salvar o planeta!"
          : "Juntos podemos salvar o planeta!"}
      </Text>
      <TouchableOpacity style={styles.next} onPress={onNext}>
        <Text>Continuar</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 28,
    textAlign: "center",
  },
  next: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    borderRadius: 50,
    paddingVertical: 24,
  },
});
