import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";

import questionsDB from "../../constants/questions.json";
import { RootStackParamList } from "../../routes";
import { StackScreenProps } from "@react-navigation/stack";
import { Question } from "../../models/question";
import { Option } from "./components/option";
import { Answer } from "./components/answer";
import { LinearGradient } from "expo-linear-gradient";

type QuestionScreenProps = StackScreenProps<RootStackParamList, "Question">;

export const QuestionScreen: React.FC<QuestionScreenProps> = ({
  route,
  navigation,
}) => {
  const numberOfQuestions = 10;
  const { currentIndex, lastAnswerWasCorrect, level } = route.params;
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question>();
  const [showResult, setShowResult] = useState<boolean>();

  useEffect(() => {
    if (questions.length === 0) {
      const levelQuestions = questionsDB.filter((x) => x.level === level)[0]
        .questions;
      const tenRandomQuestions = getRandomQuestions(
        levelQuestions,
        numberOfQuestions
      );
      setQuestions(() => [...tenRandomQuestions]);
    }
  }, []);

  useEffect(() => {
    setCurrentQuestion(questions[currentIndex]);
    setShowResult(currentIndex !== 0);
  }, [questions, currentIndex]);

  function handleOnNext() {
    setShowResult(false);
    if (questions[currentIndex] == null) navigation.navigate("Complete");
  }

  return (
    <View style={styles.container}>
      {showResult && (
        <Answer
          lastAnswerWasCorrect={lastAnswerWasCorrect}
          onNext={handleOnNext}
        />
      )}

      {!showResult && (
        <>
          <View style={styles.header}>
            <LinearGradient
              colors={["#49B805", "#B2FF50"]}
              style={[styles.header, styles.elevation]}
            >
              <Text style={styles.textTitle}>
                Questão {currentIndex + 1}/{questions.length}
              </Text>
              <Text style={styles.textQuestion}>{currentQuestion?.text}</Text>
            </LinearGradient>
          </View>

          <View style={styles.options}>
            {currentQuestion?.options.map((option, index) => (
              <Option
                key={index}
                currentIndex={currentIndex}
                option={option}
                level={level}
              />
            ))}
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EBFFDF",
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

  textTitle: {
    fontSize: 40,
    fontStyle: "normal",
    color: "white",
    alignSelf: "center",
    marginTop: 40,
  },

  textQuestion: {
    fontSize: 20,
    fontStyle: "normal",
    color: "white",
    alignSelf: "center",
    marginTop: 40,
    margin: 20,
  },
  header: {
    width: 392,
    height: 300,
    borderRadius: 12,
    padding: 0,
    marginLeft: 0.5,
  },
  elevation: {
    elevation: 40,
    shadowColor: "black",
    shadowRadius: 20,
    shadowOpacity: 0.5,
  },

  text: { color: "white", fontSize: 20, marginTop: 20 },
});

function getRandomQuestions(arr: Question[], amount: number) {
  if (amount >= arr.length) {
    return arr.slice();
  }

  const questionsSelected: Question[] = [];
  const copyArray = arr.slice();

  for (let i = 0; i < amount; i++) {
    const randomIndex = Math.floor(Math.random() * copyArray.length);
    questionsSelected.push(copyArray.splice(randomIndex, 1)[0]);
  }

  return questionsSelected;
}
