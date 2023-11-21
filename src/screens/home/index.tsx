import React, { useEffect } from "react";
import { StackScreenProps } from "@react-navigation/stack";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
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
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      scrollEnabled={true}
    >
      <ImageBackground
        source={require("../../../assets/Images/Fundo_App.jpeg")}
        style={styles.imageBackground}
      >
        <View style={styles.container}>
          <Text style={styles.header}>3koPlay</Text>
          <TouchableOpacity style={styles.start} onPress={redirectToQuestion}>
            <Text style={styles.buttontext}>Iniciar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.start}
            onPress={redirectToCollectionPoints}
          >
            <Text style={styles.buttontext}>Pontos de coleta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.start} onPress={redirectToNews}>
            <Text style={styles.buttontext}>Dicas de reciclagem</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.start} onPress={redirectToContato}>
            <Text style={styles.buttontext}>Contatos</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.start}
            onPress={() => navigation.navigate("News")}
          >
            <Text style={styles.buttontext}>Noticias</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.start}
            onPress={() => navigation.navigate("Perguntas")}
          >
            <Text style={styles.buttontext}>Sugira perguntas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.start}
            onPress={() => navigation.navigate("Parceiros")}
          >
            <Text style={styles.buttontext}>Parceiros</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    gap: 15,
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: "5%",
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    textShadowRadius: 3,
    fontWeight: "bold",
    marginTop: "5%",
    marginBottom: "10%",
    fontSize: 50,
    textAlign: "center",
    color: "#000000",
    textShadowColor: 'rgba(0, 0, 0, 0.4)',
    textShadowOffset: { width: 0, height: 5 },
  },
  buttontext: {
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    color: "#000000",
  },
  start: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#75FFFF",
    borderRadius: 20,
    paddingVertical: "5%",
    borderWidth: 3,
    elevation: 5, // Adiciona sombra no Android
  },
});

export default HomeScreen;
