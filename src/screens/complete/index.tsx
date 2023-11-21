import { StackScreenProps } from "@react-navigation/stack";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  ImageBackground
} from "react-native";
import { RootStackParamList } from "../../routes";
import { correctAnswer } from "../../models/answerCount";

type CompleteScreenProps = StackScreenProps<RootStackParamList, "Complete">;

export const CompleteScreen: React.FC<CompleteScreenProps> = ({
  route,
  navigation,
}) => {
  const { currentIndex } = route.params || { currentIndex: 0 };
  const incrementIndex = () => {
    if (currentIndex === 0) {
      correctAnswer.count = 0;
    }
  };
  
  const getBackgroundImage = () => {
    if (correctAnswer.count > 7) {
      return require("../../../assets/Images/Gold.png");
    } else if (correctAnswer.count > 5) {
      return require("../../../assets/Images/Silver.png");
    } else {
      return require("../../../assets/Images/Bronze.png");
    }
  };

  function redirectToHome() {
    navigation.navigate("Home");
  }
  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      scrollEnabled={true}
    >
      <ImageBackground
        source={getBackgroundImage()}
        style={styles.imageBackground}
      >
      <View style={styles.container}>
        <Text style={styles.title}>Quiz Finalizado</Text>
        <Text style={styles.header}>
          Quantia de acertos: {correctAnswer.count}
        </Text>
        <TouchableOpacity
          style={styles.start}
          onPress={redirectToHome}
          onPressOut={incrementIndex}
        >
          <Text style={styles.headerbutton}>Home</Text>
        </TouchableOpacity>
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
    paddingHorizontal: 24,
  },
  title: {
    marginTop: "20%",
    fontSize: 35,
    marginBottom: "95%",
    textAlign: "center",
    fontWeight: "bold",
  },
  imageBackground: {
    flex: 1,
    alignSelf: "center",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    marginTop: "25%",
    fontSize: 30,
    textAlign: "center",
    marginBottom: "10%",
  },
  headerbutton: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  start: {
    backgroundColor: "#BDFF95",
    justifyContent: "center",
    boxShadow: "0px 7px 7px rgba(0, 0, 0, 0.35) inset",
    width: "60%",
    height: "8%",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#000000",
    alignSelf: "center",
  },
});
