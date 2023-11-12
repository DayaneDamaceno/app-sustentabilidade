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
import { correctAnswer } from "../../models/answerCount";

type CompleteScreenProps = StackScreenProps<RootStackParamList, "Complete">;

export const CompleteScreen: React.FC<CompleteScreenProps> = ({
  navigation,
}) => {
  function redirectToHome() {
    navigation.navigate("Home");
  }
  return (
<View style={styles.container}>
      <Text style={styles.header}>Quiz Finalizado</Text>
      <Text style={styles.header}>Quantia de acertos: {correctAnswer.count}</Text>
      <TouchableOpacity style={styles.start} onPress={redirectToHome}>
        <Text>Voltar para home</Text>
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
    fontSize: 28,
    textAlign: "center",
  },
  start: {
    backgroundColor: "#BDFF95",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#000000",
    padding: 24,
    alignItems: "center",
  },
});