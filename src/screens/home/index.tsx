import React, { useEffect } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { RootStackParamList } from "../../routes";
import { Ionicons } from "@expo/vector-icons";
import { correctAnswer } from "../../models/answerCount";

type HomeScreenProps = StackScreenProps<RootStackParamList, "Home">;

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  function redirectToQuestion() {
    navigation.navigate("Level");
  }

  function redirectToCollectionPoints() {
    navigation.navigate("Collect");
  }

  function redirectToNews() {
    navigation.navigate("Tip");
  }

  useEffect(() => {
    correctAnswer.reset();
  }, []);

  function redirectToContato() {
    navigation.navigate("Contato");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>EkoPlay</Text>
      <TouchableOpacity style={styles.start} onPress={redirectToQuestion}>
        <Text>Iniciar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.collectionPoints}
        onPress={redirectToCollectionPoints}
      >
        <Text>Pontos de coleta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.TipButton} onPress={redirectToNews}>
        <Text>Dicas de reciclagem</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.start} onPress={redirectToContato}>
        <Text>Contatos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.start}
        onPress={() => navigation.navigate("News")}
      >
        <Text>Noticias</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EBFFDF",
    flex: 1,
    gap: 15,
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: "5%"
  },
  header: {
    marginTop: "5%",
    marginBottom: "10%",
    fontSize: 50,
    textAlign: "center",
  },
  start: {
    alignItems: "center",
    backgroundColor: "#BDFF95",
    borderRadius: 20,
    paddingVertical: "5%",
    borderTopColor: "#000000",
    borderWidth: 3,
  },
  collectionPoints: {
    alignItems: "center",
    backgroundColor: "#BDFF95",
    borderRadius: 20,
    paddingVertical: "5%",
    borderTopColor: "#000000",
    borderWidth: 3,
  },
  TipButton: {
    alignItems: "center",
    backgroundColor: "#BDFF95",
    borderRadius: 20,
    paddingVertical: "5%",
    borderTopColor: "#000000",
    borderWidth: 3,
  },
});

export default HomeScreen;
