//Nova tela de pontos de coleta

import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { View, Text, StyleSheet, Platform, StatusBar, TouchableOpacity } from "react-native";
import { RootStackParamList } from "../../routes";

type CollectScreenProps = StackScreenProps<RootStackParamList, "Collect">;

export const CollectScreen: React.FC<CollectScreenProps> = ({ navigation }) => {
  function redirectToHome() {
    navigation.navigate("Home");
  }

  return (
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
  collectionBox: {
    backgroundColor: "#98FF98",
    borderRadius: 20,
    padding: 24,
    marginTop: 20,
  },
  collectionItem: {
    fontSize: 18,
    marginBottom: 10,
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
