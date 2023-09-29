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

type HomeScreenProps = StackScreenProps<RootStackParamList, "Home">;

export const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  function redirectToQuestion() {
    navigation.navigate("Level");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bem vindo</Text>
      <TouchableOpacity style={styles.start} onPress={redirectToQuestion}>
        <Text>Iniciar</Text>
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
