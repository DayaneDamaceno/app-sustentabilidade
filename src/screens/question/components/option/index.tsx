import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";

import { RootStackParamList } from "../../../../routes";
import { StackNavigationProp } from "@react-navigation/stack";
import { QuizOption } from "../../../../models/option";
import { Level } from "../../../../models/level";

type NavigationProps = StackNavigationProp<RootStackParamList>;

interface OptionProps {
  currentIndex: number;
  level: Level;
  option: QuizOption;
}

export const Option: React.FC<OptionProps> = (props) => {
  const navigation = useNavigation<NavigationProps>();

  const redirectToNextQuestion = (wasCorrect: boolean) => {
    navigation.navigate("Question", {
      currentIndex: props.currentIndex + 1,
      level: props.level,
      lastAnswerWasCorrect: wasCorrect,
    });
  };

  function onChoiceOption() {
    redirectToNextQuestion(props.option.isCorrect);
  }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={onChoiceOption}>
        <Text>{props.option.text}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#72D423",
    borderRadius: 20,
    width: 300,
    height: 75,
    alignItems: "center",
    marginBottom: -20,
    marginTop: 30,
    marginLeft: 50,
  },
});
