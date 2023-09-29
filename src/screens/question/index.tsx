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
      <Text style={styles.count}>Questão {currentIndex + 1}/{questions.length}</Text>
      <Text style={styles.question}>
        {currentQuestion?.text}
      </Text>
      <View style={styles.options}>
        {currentQuestion?.options.map((option, index) => (
          <TouchableOpacity key={index} style={styles.option} onPress={() => onChoiceOption(option)}>
            <Text>{option.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
    gap: 24,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 55,
    paddingHorizontal: 24,
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
  },
  option: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    borderRadius: 50,
    paddingVertical: 24,
  },
});
