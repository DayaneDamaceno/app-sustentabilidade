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
      <TouchableOpacity style={styles.option} onPress={onChoiceOption}>
        <Text>{props.option.text}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  option: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    borderRadius: 50,
    paddingVertical: 24,
  },
});
