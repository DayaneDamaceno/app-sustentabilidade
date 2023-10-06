import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";

import questionsDB from "../../constants/questions.json";
import { RootStackParamList } from "../../routes";
import { StackScreenProps } from "@react-navigation/stack";
import { Question } from "../../models/question";
import { Option } from "./components/option";
import { Answer } from "./components/answer";

type QuestionScreenProps = StackScreenProps<RootStackParamList, "Question">;

export const QuestionScreen: React.FC<QuestionScreenProps> = ({
  route,
  navigation,
}) => {
  const { currentIndex, lastAnswerWasCorrect, level } = route.params;
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question>();
  const [showResult, setShowResult] = useState<boolean>();

  useEffect(() => {
    const levelQuestions = questionsDB.filter((x) => x.level === level)[0]
      .questions;
    setQuestions(levelQuestions);

    setCurrentQuestion(levelQuestions[currentIndex]);
    console.log("com current");
    setShowResult(currentIndex !== 0);
  }, [currentIndex]);

  function handleOnNext() {
    setShowResult(false);
    if (questionsDB[currentIndex] == null) navigation.navigate("Complete");
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
          <Text style={styles.count}>
            Questão {currentIndex + 1}/{questions.length}
          </Text>
          <Text style={styles.question}>{currentQuestion?.text}</Text>
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
