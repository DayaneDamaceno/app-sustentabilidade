import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";

export const QuestionScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.count}>Questão 1/10</Text>
      <Text style={styles.question}>
        Porque usar os recursos de forma inteligente ajuda a manter o equilíbrio
        do meio ambiente e a não desperdiçar coisas?
      </Text>
      <View style={styles.options}>
        <TouchableOpacity style={styles.option}>
          <Text>Opção 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text>Opção 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text>Opção 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text>Opção 4</Text>
        </TouchableOpacity>
      </View>
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
  count: {
    fontSize: 12,
    textAlign: "center",
  },
  question: {
    fontSize: 28,
    textAlign: "center",
  },
  options: {
    gap: 10,
  },
  option: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    borderRadius: 50,
    paddingVertical: 24,
  },
});
