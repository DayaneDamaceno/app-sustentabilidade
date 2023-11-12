import React, { useState } from "react";
import { View, Text, StyleSheet, Platform, StatusBar, TouchableOpacity } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes";

type TipScreenProps = StackScreenProps<RootStackParamList, "Tip">;

const DATA = [
  {
    id: "1",
    title: "Dica 1",
    content: "Conteúdo da Dica 1",
  },
  {
    id: "2",
    title: "Dica 2",
    content: "Conteúdo da Dica 2",
  },
  
  {
    id: "3",
    title: "Dica 3",
    content: "Conteúdo da Dica 3",
  },
];

export const TipScreen: React.FC<TipScreenProps> = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function redirectToHome() {
    navigation.navigate("Home");
  }

  const handleSwipe = (direction: "right" | "left") => {
    if (direction === "right" && currentIndex < DATA.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else if (direction === "left" && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dicas de reciclagem</Text>
      <View style={styles.carouselItem}>
        <Text style={styles.carouselTitle}>{DATA[currentIndex].title}</Text>
        <Text style={styles.carouselContent}>{DATA[currentIndex].content}</Text>
      </View>
      <View style={styles.navigationButtons}>
        <TouchableOpacity style={styles.navigationButton} onPress={() => handleSwipe("left")}>
          <Text>◀️</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigationButton} onPress={() => handleSwipe("right")}>
          <Text>▶️</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.returnButton} onPress={redirectToHome}>
        <Text>Voltar para home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EBFFDF",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 55,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: 12,
    fontSize: 40,
    textAlign: "center",
  },
  carouselItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#98FF98",
    borderRadius: 20,
    marginTop: 20,
    padding: 24,
  },
  carouselTitle: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "bold",
  },
  carouselContent: {
    fontSize: 18,
    textAlign: "center",
  },
  navigationButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  navigationButton: {
    backgroundColor: "#BDFF95",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#000000",
    padding: 10,
    alignItems: "center",
    width: 40,
  },
  returnButton: {
    backgroundColor: "#BDFF95",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#000000",
    padding: 24,
    alignItems: "center",
    marginTop: 20,
  },
});

export default TipScreen;