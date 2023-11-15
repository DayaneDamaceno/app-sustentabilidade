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
    <ScrollView contentContainerStyle={styles.scrollViewContent} scrollEnabled={true}>
    <ImageBackground
      source={require('../../../assets/Images/Fundo_App.jpeg')}
      style={styles.imageBackground}
    >
      <View style={styles.container}>
        <Text style={styles.header}>EkoPlay</Text>
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
    paddingHorizontal: "5%"
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: 0, height: 5 },
    textShadowRadius: 3,
    fontWeight: "bold",
    marginTop: "5%",
    marginBottom: "10%",
    fontSize: 50,
    textAlign: "center",
    color: "Black",
  },
  buttontext: {
    fontWeight: "bold",
    fontSize: 15,
    textAlign: "center",
    color: "Black",
  },
  start: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#75FFFF",
    boxShadow: '0px 7px 7px rgba(0, 0, 0, 0.35) inset',
    borderRadius: 20,
    paddingVertical: "5%",
    borderTopColor: "#000000",
    borderWidth: 3,
  },
});

export default HomeScreen;
