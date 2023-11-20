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
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { RootStackParamList } from "../../routes";
import * as Font from "expo-font";

type NovoParceiroScreenProps = StackScreenProps<
  RootStackParamList,
  "NovoParceiro"
>;

export const NovoParceiroScreen: React.FC<NovoParceiroScreenProps> = ({
  navigation,
}) => {
  function redirectToHome() {
    navigation.navigate("Home");
  }
  const [nome, setTextoNome] = useState<string>("");
  const [email, setTextoEmail] = useState<string>("");
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
        "https://ekoplayportal.azurewebsites.net/parceiros",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nome, email }),
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
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      scrollEnabled={true}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Vire nosso parceiro</Text>
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
        <TouchableOpacity style={styles.start} onPress={enviarDados}>
          <Text style={styles.titlebutton}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#EBFFDF",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 20,
    paddingHorizontal: 16,
  },
  title: {
    fontFamily: "Kanit-Bold",
    fontSize: 40,
    textAlign: "center",
    marginTop: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
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
