import React, { useState, useEffect } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../../routes";
import { StackNavigationProp } from "@react-navigation/stack";
import { QuizOption } from "../../../../models/option";
import { Level } from "../../../../models/level";
import * as Font from 'expo-font';

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
      currentIndex: props.currentIndex < 11 ? props.currentIndex + 1 : props.currentIndex,
      level: props.level,
      lastAnswerWasCorrect: wasCorrect,
    });
  };
  
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
  async function loadFonts() {
    await Font.loadAsync({
      'Kanit-Regular': require('../../../../../assets/fonts/kanit/Kanit-Regular.ttf'),
    });
    setFontsLoaded(true);
  }
  
  loadFonts();
}, []);

  function onChoiceOption() {
    redirectToNextQuestion(props.option.isCorrect);
  }
  return (
    <>
      <TouchableOpacity style={styles.button} onPress={onChoiceOption}>
        <Text style={styles.text} >{props.option.text}</Text>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#72D423",
    borderRadius: 16,
    width: "87%",
    padding: 15,
    marginVertical: "2%",
    justifyContent: "center",
    alignItems: "center",
    background: `linear-gradient(0deg, #72D423 0%, #72D423 100%), linear-gradient(0deg, #FF9A01 0%, #FF9A01 100%), #FF9A01`,
    boxShadow: `0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset`,
  },
  text: { 
    color: "white",
    fontSize: 16,
    fontFamily: 'Kanit-Regular',
    marginLeft: "5%",
    marginRight: "5%",
    marginVertical: "2%",
    textAlign: "center"
  },
});
