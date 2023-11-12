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
  function redirectToContato() {
    navigation.navigate("Contato");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bem vindo!</Text>
      <TouchableOpacity style={styles.start} onPress={redirectToQuestion}>
        <Text>Iniciar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.start} onPress={redirectToContato}>
        <Text>Contatos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EBFFDF",
    flex: 1,
    gap: 24,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 55,
    paddingHorizontal: 24,
  },
  header: {
    marginTop: 120,
    fontSize: 50,
    textAlign: "center",
  },
  start: {
    alignItems: "center",
    backgroundColor: "#BDFF95",
    borderRadius: 20,
    paddingVertical: 24,
    borderTopColor: "#000000",
    borderWidth: 3,
  },
  next: {
    alignItems: "center",
    backgroundColor: "#BDFF95",
    borderRadius: 20,
    paddingVertical: 24,
    width: 320,
    height: 80,
    marginLeft: 30,
    marginTop: 200,
    borderTopColor: "#000000",
    borderWidth: 3,
  },
});
