import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";

import questionsDB from  '../../constants/questions.json'
import { RootStackParamList } from '../../routes';
import { StackScreenProps } from '@react-navigation/stack';
import { LinearGradient } from "expo-linear-gradient"

interface Option{
  text: string,
  isCorrect: boolean
}

interface Question{
  text: string,
  options: Option[]
}

type QuestionScreenProps = StackScreenProps<RootStackParamList, "Question">;



export const QuestionScreen: React.FC<QuestionScreenProps> = ({ route, navigation }) => {

  const { currentIndex } = route.params;
  const [isWrongOption, setIsWrongOption] = useState<boolean>(false);
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question>();

  useEffect(() => {
    setQuestions(questionsDB)
  }, []);

  useEffect(() => {
    if(questionsDB[currentIndex] == null){
      navigation.navigate("Complete");
    }
    setCurrentQuestion(questionsDB[currentIndex])

  }, [currentIndex]);

  function onChoiceOption(option: Option){
    if(option.isCorrect)
      navigation.navigate("Question", {
        currentIndex: currentIndex + 1,
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <LinearGradient
        colors={["#49B805", "#B2FF50"]}
        style={[styles.header, styles.shadowProp]}>

      <Text style={styles.textTitle}>Questão {currentIndex + 1}/{questions.length}</Text>
      <Text style={styles.textQuestion}>
        {currentQuestion?.text}
      </Text>

      </LinearGradient>
      </View>
      <View style={styles.options}>
        {currentQuestion?.options.map((option, index) => (
          <TouchableOpacity key={index} style={styles.button} onPress={() => onChoiceOption(option)}>
            <Text style={styles.text}>{option.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EBFFDF',
    flex: 1,
    gap: 24,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 55,
    paddingHorizontal: 100,
    margin: -100,
    marginTop: -50,
  },
  count: {
    fontSize: 12,
    textAlign: "center",
  },
  question: {
    fontSize: 28,
    textAlign: "center",
  },
  options: {
    gap: 10,
    marginTop: -10,
  },
  option: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    borderRadius: 50,
    paddingVertical: 24,
  },
  button: {
    backgroundColor: "#72D423",
    borderRadius: 20,
    width: 300,
    height: 75,
    alignItems: 'center',
    marginBottom: -20,
    marginTop: 30,
    marginLeft: 50,
  },
  textTitle: {
    fontSize: 40,
    fontStyle: 'normal',
    color: 'white',
    alignSelf: 'center',
    marginTop: 40,
  },

  textQuestion: {
    fontFamily: 'Roboto',
    fontSize: 20,
    fontStyle: 'normal',
    color: 'white',
    alignSelf: 'center',
    marginTop: 40,
    margin: 20,
  },
  header: {
    width: 405,
    height: 300,
    borderRadius: 12,
    padding: 0,
    marginLeft: -3,
  },
  shadowProp: {
    borderWidth: 4,
    borderColor: 'black',
    borderRadius: 30,
  },

  text: { color: "white", fontSize: 20, marginTop: 20 },
});
