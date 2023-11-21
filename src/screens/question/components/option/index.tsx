import React, { useState, useEffect } from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { RootStackParamList } from "../../../../routes";
import { StackNavigationProp } from "@react-navigation/stack";
import { QuizOption } from "../../../../models/option";
import { Level } from "../../../../models/level";
import * as Font from "expo-font";
import { LinearGradient } from 'expo-linear-gradient';


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
      currentIndex:
        props.currentIndex < 11 ? props.currentIndex + 1 : props.currentIndex,
      level: props.level,
      lastAnswerWasCorrect: wasCorrect,
    });
  };

  async function loadFonts() {
    await Font.loadAsync({
      "Kanit-Bold": require("../../../../../assets/fonts/kanit/Kanit-Bold.ttf"),
      "Kanit-Regular": require("../../../../../assets/fonts/kanit/Kanit-Regular.ttf"),
    });
    setFontsLoaded(true);
  }
  const [fontsLoaded, setFontsLoaded] = useState(false);
  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  function onChoiceOption() {
    redirectToNextQuestion(props.option.isCorrect);
  }
  return (
    <TouchableOpacity style={styles.flexshadow} activeOpacity={0.7}>
      <TouchableOpacity style={styles.button} onPress={onChoiceOption} activeOpacity={0.7}>
        <Text style={styles.text}>{props.option.text}</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#72D423",
    borderRadius: 16,
    width: "87%",
  },
  flexshadow: {
    backgroundColor: "#72D423",
    padding: 15,
    width: "87%",
    borderColor:"rgba(0, 0, 0, 0.2)",
    marginVertical: "2%",
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 5,
    borderBottomStartRadius: 16,
    borderBottomEndRadius: 16,
    borderLeftWidth: 0.25,
    borderRightWidth: 0.25,
    borderTopStartRadius: 16,
    borderTopEndRadius: 16,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontFamily: "Kanit-Bold",
    marginLeft: "5%",
    marginRight: "5%",
    marginVertical: "2%",
    textAlign: "center",
  },
});
