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
        source={require("../../../assets/Images/Fundo_App.png")}
        style={styles.imageBackground}
      >
        <View style={styles.container}>
          <TouchableOpacity style={styles.start} onPress={redirectToQuestion}>
            <Text style={styles.buttontext}>Iniciar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.start}
            onPress={redirectToCollectionPoints}
          >
            <Text style={styles.buttontext}>Ecopontos</Text>
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
            <Text style={styles.buttontext}>Notícias</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.start}
            onPress={() => navigation.navigate("Perguntas")}
          >
            <Text style={styles.buttontext}>Sugerir Perguntas</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.start}
            onPress={() => navigation.navigate("Parceiros")}
          >
            <Text style={styles.buttontext}>Seja Nosso Parceiro</Text>
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
    paddingTop: "30%",
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
    elevation: 5,
  },
});

export default HomeScreen;
