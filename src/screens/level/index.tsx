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
import React, { useState, useEffect } from "react";
import { RootStackParamList } from "../../routes";
import { Ionicons } from "@expo/vector-icons";
import { Level } from "../../models/level";
import * as Font from "expo-font";
import { LinearGradient } from 'expo-linear-gradient';

type LevelScreenProps = StackScreenProps<RootStackParamList, "Level">;

export const LevelScreen: React.FC<LevelScreenProps> = ({ navigation }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  function redirectToQuestion(levelSelected: Level) {
    navigation.navigate("Question", {
      level: levelSelected,
      currentIndex: 0,
    });
  }
  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        "Jomhuria-Regular": require("../../../assets/fonts/jomhuria/Jomhuria-Regular.ttf"),
        "Kanit-Bold": require("../../../assets/fonts/kanit/Kanit-Bold.ttf"),
        "Kanit-Regular": require("../../../assets/fonts/kanit/Kanit-Regular.ttf"),
      });
      setFontsLoaded(true);
    }

    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return <Text>Loading...</Text>;
  }
  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      scrollEnabled={true}
    >
      <ImageBackground
        source={require("../../../assets/Images/Fundo_Floresta.jpeg")}
        style={styles.imageBackground}
      >
        <View style={styles.container}>
          <LinearGradient 
          colors={['#70FF00', 'transparent']}
          style={styles.centeredContainer}>
            <Text style={styles.header}>Modo de Jogo</Text>
            <View style={styles.buttonBox}>
              <TouchableOpacity
                style={[styles.start, styles.greenButton]}
                onPress={() => redirectToQuestion(Level.Easy)}
              >
                <Text style={styles.buttontitle}>Fácil</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonBox}>
              <TouchableOpacity
                style={[styles.start, styles.yellowButton]}
                onPress={() => redirectToQuestion(Level.Medium)}
              >
                <Text style={styles.buttontitle}>Médio</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonBox}>
              <TouchableOpacity
                style={[styles.start, styles.redButton]}
                onPress={() => redirectToQuestion(Level.Hard)}
              >
                <Text style={styles.buttontitle}>Difícil</Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
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
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 55,
    paddingHorizontal: 24,
    justifyContent: "center",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  centeredContainer: {
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.50)",
    border: "4px rgba(0, 0, 0, 0.90) solid",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#000000",
    padding: 24,
    alignItems: "center",
  },
  buttontitle: {
    fontFamily: "Kanit-Regular",
    fontSize: 25,
  },
  header: {
    fontFamily: "Jomhuria-Regular",
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: 0, height: 4 },
    textShadowRadius: 3,
    fontSize: 50,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: "8%",
  },
  buttonBox: {
    width: "100%",
    marginTop: 12,
  },
  start: {
    alignItems: "center",
    paddingVertical: "3%",
    borderRadius: 22,
    marginHorizontal: "7%",
    marginVertical: "2%",
  },
  greenButton: {
    borderColor: "rgba(0, 255, 71, 0.50)",
    borderWidth: 3,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    backgroundColor: "#E5FFD6",
  },
  yellowButton: {
    borderColor: "rgba(255, 245, 0, 0.50)",
    borderWidth: 3,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    backgroundColor: "#E5FFD6",
  },
  redButton: {
    borderColor: "rgba(255, 0, 0, 0.50)",
    borderWidth: 3,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    backgroundColor: "#E5FFD6",
  },
  startButtonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
