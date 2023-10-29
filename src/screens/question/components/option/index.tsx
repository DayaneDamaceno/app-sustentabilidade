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
        <Text style={styles.text}>{props.option.text}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#72D423",
    borderRadius: 16,
    width: "100%",
    padding: 14,
    justifyContent: "center",
    alignItems: "center",
    background: `linear-gradient(0deg, #72D423 0%, #72D423 100%), linear-gradient(0deg, #FF9A01 0%, #FF9A01 100%), #FF9A01`,
    boxShadow: `0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset`,
  },
  text: {
    color: "white",
    fontSize: 16,
    //fontFamily: "Kanit",
    marginLeft: "5%",
    marginRight: "5%",
    marginVertical: "2%",
    textAlign: "center",
  },
});
