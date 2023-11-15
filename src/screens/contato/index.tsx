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

type ContatoScreenProps = StackScreenProps<RootStackParamList, "Contato">;

export const ContatoScreen: React.FC<ContatoScreenProps> = ({ navigation }) => {
  function redirectToHome() {
    navigation.navigate("Home");
  }
  const [nome, setTextoNome] = useState<string>("");
  const [email, setTextoEmail] = useState<string>("");
  const [assunto, setAssunto] = useState<string>("");
  const [mensagem, setMensagem] = useState<string>("");
  const [fontsLoaded, setFontsLoaded] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      "Kanit-Bold": require("../../../assets/fonts/kanit/Kanit-Bold.ttf"),
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
        "https://ekoplayportal.azurewebsites.net/contatos",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nome, email, assunto, mensagem }),
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
      <Text style={styles.title}>Fale Conosco</Text>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.boxwrite}
        placeholder="Digite aqui"
        onChangeText={(text) => setTextoNome(text)}
        value={nome}
      />
      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.boxwrite}
        placeholder="Digite aqui"
        onChangeText={(text) => setTextoEmail(text)}
        value={email}
      />
      <Text style={styles.label}>Assunto:</Text>
      <TextInput
        style={styles.boxwrite}
        placeholder="Suporte/Anuncie/Bugs/Contate"
        onChangeText={(text) => setAssunto(text)}
        value={assunto}
      />
      <Text style={styles.label}>Mensagem:</Text>
      <TextInput
        style={styles.textarea}
        multiline
        numberOfLines={10}
        onChangeText={(text) => setMensagem(text)}
        value={mensagem}
      />
      <TouchableOpacity style={styles.start} onPress={enviarDados}>
        <Text style={styles.titlebutton}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
    backgroundColor: "#EBFFDF",
    flex: 1,
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: "Kanit-Bold",
    fontSize: 40,
    textAlign: "center",
    marginTop: 20,
  },
  label: {
    fontFamily: "Kanit-Bold",
    fontSize: 28,
  },
  boxwrite: {
    width: "100%",
    padding: 10,
    opacity: 0.9,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1.8,
    borderRadius: 12,
  },
  textarea: {
    width: "100%",
    padding: 10,
    minHeight: 150,
    opacity: 0.9,
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1.8,
    borderRadius: 12,
  },
  titlebutton: {
    fontFamily: "Kanit-Bold",
    textAlign: "center",
    fontSize: 20,
  },
  start: {
    width: "100%",
    height: 60,
    backgroundColor: "#BDFF95",
    borderRadius: 12,
    borderWidth: 2,
    marginTop: 20,
    borderColor: "#000000",
    alignSelf: "center",
    justifyContent: "center",
  },
});
