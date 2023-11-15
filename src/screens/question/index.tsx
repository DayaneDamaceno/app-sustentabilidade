import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Platform, StatusBar, ScrollView, } from "react-native";
import questionsDB from "../../constants/questions.json";
import { RootStackParamList } from "../../routes";
import { StackScreenProps } from "@react-navigation/stack";
import { Question } from "../../models/question";
import { Option } from "./components/option";
import { Answer } from "./components/answer";
import * as Font from "expo-font";
import { QuizOption } from "../../models/option";

type QuestionScreenProps = StackScreenProps<RootStackParamList, "Question">;

export const QuestionScreen: React.FC<QuestionScreenProps> = ({
  route,
  navigation,
}) => {
  const numberOfQuestions = 10;
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question>();
  const [showResult, setShowResult] = useState<boolean>();
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const { currentIndex, lastAnswerWasCorrect, level } = route.params;

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Jomhuria-Regular": require("../../../assets/fonts/jomhuria/Jomhuria-Regular.ttf"),
        "Kanit-Bold": require("../../../assets/fonts/kanit/Kanit-Bold.ttf"),
        "Kanit-Regular": require("../../../assets/fonts/kanit/Kanit-Regular.ttf"),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

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
    <ScrollView contentContainerStyle={styles.scrollViewContent} scrollEnabled={true}>
    <View style={styles.container}>
      {showResult && (
        <Answer
          lastAnswerWasCorrect={lastAnswerWasCorrect}
          onNext={handleOnNext}
          currentIndex={currentIndex}
        />
      )}

      {!showResult && (
        <>
          <View style={styles.header}>
            <Text style={styles.textTitle}>
              Questão {currentIndex + 1}/{questions.length}
            </Text>
            <Text style={styles.textQuestion}>{currentQuestion?.text}</Text>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  count: {
    fontSize: 12,
    textAlign: "center",
  },

  options: {
    alignItems: "center",
  },

  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  textTitle: {
    fontSize: 50,
    fontFamily: "Jomhuria-Regular",
    wordWrap: "break-word",
    opacity: 0.85,
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: 0, height: 6 },
    textShadowRadius: 7,
    color: "white",
    alignSelf: "center",
    fontWeight: "400",
    marginTop: "2%",
  },

  textQuestion: {
    fontSize: 20,
    fontStyle: "normal",
    fontFamily: "Kanit-Regular",
    color: "white",
    textShadowColor: "rgba(0, 0, 0, 0.35)",
    textShadowOffset: { width: 1, height: 5 },
    textShadowRadius: 6,
    alignSelf: "center",
    justifyContent: "center",
    marginTop: "15%",
    margin: "8%",
    textAlign: "center",
  },

  header: {
    backgroundImage: "linear-gradient(#49B805, #B2FF50)",
    alignSelf: "center",
    alignItems: "center",
    width: "100%",
    height: "30%",
    marginBottom: "8%",
    boxShadow: "4px 4px 8px rgba(0, 0, 0, 0.2)",
    filter:
      "drop-shadow(2px 8px 4px rgba(0, 0, 0, 0.25)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
});

function getRandomQuestions(arr: Question[], amount: number) {
  if (amount >= arr.length) {
    return arr.slice();
  }

  const questionsSelected: Question[] = [];
  const copyArray = arr.slice();

  for (let i = 0; i < amount; i++) {
    const randomIndex = Math.floor(Math.random() * copyArray.length);
    const randomQuestion = { ...copyArray[randomIndex] };

    randomQuestion.options = shuffleOptions(randomQuestion.options);

    questionsSelected.push(randomQuestion);
    copyArray.splice(randomIndex, 1);
  }

  return questionsSelected;
}

function shuffleOptions(options: QuizOption[]) {
  const shuffledOptions = options.slice();

  for (let i = shuffledOptions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledOptions[i], shuffledOptions[j]] = [
      shuffledOptions[j],
      shuffledOptions[i],
    ];
  }

  return shuffledOptions;
}