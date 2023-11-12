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
import React, { useState, useEffect } from 'react';
import { RootStackParamList } from "../../routes";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import * as Font from 'expo-font';

type ContatoScreenProps = StackScreenProps<RootStackParamList, "Contato">;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight: 20,
    backgroundColor: "#EBFFDF",
    flex: 1,
    paddingHorizontal: 16,
  },
  header: {
    fontFamily: "Kanit-Bold",
    fontSize: 30,
    textAlign: "left",
    paddingLeft: "15%",
  },
  header2: {
    fontFamily: "Kanit-Bold",
    fontSize: 20,
    textAlign: "left",
    paddingLeft: "15%",
  },
  title: {
    fontFamily: "Kanit-Bold",
    fontSize: 35,
    textAlign: "center",
    paddingBottom: "15%",
  },
  boxwrite: {
    height: "5%",
    width: "80%",
    opacity: 0.9,
    marginBottom: "6%",
    marginLeft: "18%",
  },
  boxwrite2: {
    height: "5%",
    width: "80%",
    backgroundColor: "white",
    borderColor: 'black',
    borderWidth: 1.8,
    borderRadius: 12,
    opacity: 0.6,
    marginTop: "1%",
    marginBottom: "6%",
    marginLeft: "15%",
  },
  boxwrite3: {
    height: "20%",
    width: "80%",
    backgroundColor: "white",
    borderColor: 'black',
    borderWidth: 1.8,
    borderRadius: 12,
    opacity: 0.6,
    marginTop: "1%",
    marginBottom: "10%",
    marginLeft: "15%",
  },
  titlebutton: {
    fontFamily: "Kanit-Bold",
    textAlign: "center",
    fontSize: 20,
  },
  start: { 
    width: "50%",
    height: "6%",
    backgroundColor: "#BDFF95",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#000000",
    alignSelf: "center",
    justifyContent: "center",
  },
});

export const ContatoScreen: React.FC<ContatoScreenProps> = ({ navigation }) => {
  function redirectToHome() {
    navigation.navigate("Home");
  }
    const [nome, setTextoNome] = useState<string>('');
    const [email, setTextoEmail] = useState<string>('');
    const [tema, setTema] = useState<string>('');
    const [assunto, setAsst] = useState<string>('');

    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
      async function loadFonts() {
        await Font.loadAsync({
          'Kanit-Bold': require('../../../assets/fonts/kanit/Kanit-Bold.ttf'),
        });
        setFontsLoaded(true);
      }
  
      loadFonts();
    }, []);

    const enviarDados = async () => {
        try {
          const response = await fetch('https://seuservidor.com/endpoint', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome, email, tema, assunto }),
          });
    
          if (response.ok) {
            Alert.alert('Dados enviados com sucesso!');
          } else {
            Alert.alert('Erro ao enviar os dados. Tente novamente.');
          }
        } catch (error) {
          console.error('Erro ao enviar os dados:', error);
          Alert.alert('Erro ao enviar os dados. Tente novamente.');
        }
      };

    return (
      <View style={styles.container}>
        <h1 style={styles.title}>Fale Conosco</h1>
        <Text style={styles.header}>Nome:</Text>
        <TextInput
          style={styles.boxwrite}
          placeholder="⠀Digite aqui"
          onChangeText={(text) => setTextoNome(text)}
          value={nome}
        />
        <Text style={styles.header}>Email:</Text>
        <TextInput
          style={styles.boxwrite}
          placeholder="⠀Digite aqui"
          onChangeText={(text) => setTextoEmail(text)}
          value={email}
        />
        <Text style={styles.header}>Tema:</Text>
        <TextInput
          style={styles.boxwrite2}
          placeholder="⠀⠀⠀⠀Suporte/Anuncie/Bugs/Contate"
          onChangeText={(text) => setTema(text)}
          value={tema}
        />
        <Text style={styles.header2}>Enviar Formulário:</Text>
        <TextInput
          style={styles.boxwrite3}
          multiline
          numberOfLines={10}
          onChangeText={(text) => setAsst(text)}
          value={assunto}
        />
        <TouchableOpacity style={styles.start} onPress={enviarDados}>
          <Text style= {styles.titlebutton}>Enviar</Text>
        </TouchableOpacity>
      </View>
    );
  };
