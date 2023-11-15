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

export const CompleteScreen: React.FC<CompleteScreenProps> = ({navigation, route}) => {
  const { currentIndex } = route.params || { currentIndex: 0 };
  const incrementIndex = () => {
    if (currentIndex === 0) {
      correctAnswer.count = 0;
  }}
  function redirectToHome() {
    navigation.navigate("Home");
  }
  return (
<View style={styles.container}>
      <Text style={styles.title}>Quiz Finalizado</Text>
      <Text style={styles.header}>Quantia de acertos: {correctAnswer.count}</Text>
      <TouchableOpacity style={styles.start} onPress={redirectToHome} onPressOut={incrementIndex}>
        <Text>Voltar para home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#EBFFDF",
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 24,
  },
  title: {
    marginTop: "50%",
    fontSize: 35,
    textAlign: "center",
    fontWeight: "bold",
  },
  header: {
    marginTop: "40%",
    fontSize: 25,
    textAlign: "center",
    marginBottom: "10%",
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