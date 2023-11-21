//Nova tela de pontos de coleta

import { StackScreenProps } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Platform, StatusBar, ScrollView, TouchableOpacity, ImageBackground, } from "react-native";
import { RootStackParamList } from "../../routes";
import * as Font from "expo-font";

type CollectScreenProps = StackScreenProps<RootStackParamList, "Collect">;

export const CollectScreen: React.FC<CollectScreenProps> = ({ navigation }) => {
  function redirectToHome() {
    navigation.navigate("Home");
  }

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

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent} scrollEnabled={true}>
      <ImageBackground
        source={require("../../../assets/Images/Jacaredboas.png")}
        style={styles.imageBackground}
      >
    <View style={styles.container}>
      <Text style={styles.title}>Pontos de coleta</Text>
      <View style={styles.collectionBox}>
        <Text style={styles.collectionItem}>Ponto de coleta 1</Text>
        <Text style={styles.collectionItem}>Ponto de coleta 2</Text>
        <Text style={styles.collectionItem}>Ponto de coleta 3</Text>
        <Text style={styles.collectionItem}>Ponto de coleta 4</Text>
        <Text style={styles.collectionItem}>Ponto de coleta 5</Text>
      </View>
      <TouchableOpacity style={styles.returnButton} onPress={redirectToHome}>
        <Text>Voltar para home</Text>
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
    paddingHorizontal: 24,
  },
  imageBackground: {
    flex: 1,
    alignSelf: "center",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Kanit-Bold",
    fontSize: 40,
    marginTop: "5%",
    textAlign: "center",
  },
  collectionBox: {
    backgroundColor: "rgba(90.48, 255, 87.13, 0.90)",
    borderColor: "#00000",
    borderWidth: 5,
    borderRadius: 20,
    padding: 24,
    marginTop: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  collectionItem: {
    fontSize: 18,
    marginBottom: 10,
  },
  returnButton: {
    backgroundColor: "#FFDFAF",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#000000",
    padding: 24,
    alignItems: "center",
    marginTop: 20,
  },
});
