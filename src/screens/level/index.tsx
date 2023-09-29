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

type LevelScreenProps = StackScreenProps<RootStackParamList, "Level">;

enum Level{
    Easy,
    Medium,
    Hard
}

export const LevelScreen: React.FC<LevelScreenProps> = ({ navigation }) => {
  function redirectToQuestion(levelSelected: Level) {
    // console.log(levelSelected)
    navigation.navigate("Question");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Selecione um nivel</Text>
      <TouchableOpacity style={styles.start} onPress={() => redirectToQuestion(Level.Easy)}>
        <Text>Facil</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.start} onPress={() => redirectToQuestion(Level.Medium)}>
        <Text>Médio</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.start} onPress={() => redirectToQuestion(Level.Hard)}>
        <Text>Dificil</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    flex: 1,
    gap: 24,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 55,
    paddingHorizontal: 24,
  },
  header: {
    marginTop: 120,
    fontSize: 28,
    textAlign: "center",
  },
  start: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    borderRadius: 50,
    paddingVertical: 24,
  },
});
