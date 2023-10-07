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

type CompleteScreenProps = StackScreenProps<RootStackParamList, "Complete">;

export const CompleteScreen: React.FC<CompleteScreenProps> = ({ navigation }) => {
  function redirectToHome() {
    navigation.navigate("Home");
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Quiz Finalizado</Text>
      <TouchableOpacity style={styles.start} onPress={redirectToHome}>
        <Text>Voltar para home</Text>
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
