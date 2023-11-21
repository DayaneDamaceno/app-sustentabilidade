import { StackScreenProps } from "@react-navigation/stack";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import { RootStackParamList } from "../../routes";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import * as Font from "expo-font";

type PerguntasScreenProps = StackScreenProps<RootStackParamList, "Perguntas">;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
    backgroundColor: "#EBFFDF",
    flex: 1,
    paddingHorizontal: 15,
  },
  subtitle: {
    fontFamily: "Kanit-Regular",
    fontSize: 25,
    textAlign: "center",
    marginBottom: "1%",
  },
  title: {
    fontFamily: "Kanit-Bold",
    fontSize: 40,
    textAlign: "center",
    paddingBottom: 2,
    marginTop: 0,
  },
  header: {
    fontFamily: "Kanit-Bold",
    fontSize: 35,
    textAlign: "left",
    paddingLeft: "2%",
  },
  boxwrite3: {
    height: "20%",
    width: "80%",
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1.8,
    marginTop: "10%",
    marginBottom: "10%",
    alignSelf: "center",
  },
  titlebutton: {
    fontFamily: "Kanit-Bold",
    textAlign: "center",
    fontSize: 25,
  },
  start: {
    width: "50%",
    height: "8%",
    backgroundColor: "#85FF91",
    borderRadius: 15,
    borderWidth: 2,
    border: "2px black solid",
    alignSelf: "center",
    justifyContent: "center",
  },
});

export const PerguntasScreen: React.FC<PerguntasScreenProps> = ({
  navigation,
}) => {
  const [pergunta, setPerguntas] = useState<string>("");
  const [fontsLoaded, setFontsLoaded] = useState(false);

  function redirectToHome() {
    navigation.navigate("Home");
  }
  async function loadFonts() {
    await Font.loadAsync({
      "Kanit-Bold": require("../../../assets/fonts/kanit/Kanit-Bold.ttf"),
      "Kanit-Regular": require("../../../assets/fonts/kanit/Kanit-Regular.ttf"),
    });
    setFontsLoaded(true);
  }

  useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }

  const enviarDados = async () => {
    try {
      const response = await fetch(
        "https://ekoplayportal.azurewebsites.net/sugestoes",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ texto: pergunta }),
        }
      );

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        Alert.alert("Dados enviados com sucesso!");
        redirectToHome();
      } else {
        Alert.alert("Erro ao enviar os dados. Tente novamente.");
      }
    } catch (error) {
      console.error("Erro ao enviar os dados:", error);
      Alert.alert("Erro ao enviar os dados. Tente novamente.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>Envie</Text>
      <Text style={styles.title}>Suas Perguntas</Text>
      <Text style={styles.header}>Perguntas:</Text>
      <TextInput
        style={styles.boxwrite3}
        multiline
        numberOfLines={20}
        onChangeText={(text) => setPerguntas(text)}
        value={pergunta}
      />
      <TouchableOpacity style={styles.start} onPress={enviarDados}>
        <Text style={styles.titlebutton}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};
