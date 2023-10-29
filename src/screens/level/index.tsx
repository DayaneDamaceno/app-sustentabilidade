import { StackScreenProps } from "@react-navigation/stack";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { RootStackParamList } from "../../routes";
import { Ionicons } from "@expo/vector-icons";
import { Level } from "../../models/level";

type LevelScreenProps = StackScreenProps<RootStackParamList, "Level">;

export const LevelScreen: React.FC<LevelScreenProps> = ({ navigation }) => {
  function redirectToQuestion(levelSelected: Level) {
    navigation.navigate("Question", {
      level: levelSelected,
      currentIndex: 0,
    });
  }
  return (
    <View style={styles.container}>
      <View style={styles.centeredContainer}>
        <Text style={styles.header}>Modo de Jogo</Text>
        <View style={styles.buttonBox}>
          <TouchableOpacity
            style={[styles.start, styles.greenButton]}
            onPress={() => redirectToQuestion(Level.Easy)}
          >
            <Text>Fácil</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonBox}>
          <TouchableOpacity
            style={[styles.start, styles.yellowButton]}
            onPress={() => redirectToQuestion(Level.Medium)}
          >
            <Text>Médio</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonBox}>
          <TouchableOpacity
            style={[styles.start, styles.redButton]}
            onPress={() => redirectToQuestion(Level.Hard)}
          >
            <Text>Difícil</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EBFFDF",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 55,
    paddingHorizontal: 24,
    // justifyContent: "center",
  },
  centeredContainer: {
    backgroundColor: "#BDFF95",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#000000",
    padding: 24,
    alignItems: "center",
  },
  header: {
    fontSize: 40,
    textAlign: "center",
  },
  buttonBox: {
    width: "100%",
    marginTop: 12,
  },
  start: {
    alignItems: "center",
    paddingVertical: 24,
    borderRadius: 20,
  },
  greenButton: {
    backgroundColor: "#98FF98",
  },
  yellowButton: {
    backgroundColor: "yellow",
  },
  redButton: {
    backgroundColor: "lightcoral",
  },
  startButtonText: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
