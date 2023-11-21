import React, { useState, useEffect } from "react";
import { 
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image, 
  TouchableOpacity, 
  ScrollView,
  ImageBackground
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes";
import * as Font from "expo-font";

type TipScreenProps = StackScreenProps<RootStackParamList, "Tip">;

const DATA = [
  {
    id: "1",
    title: "Dica 1",
    content: "Conteúdo da Dica 1",
  },
  {
    id: "2",
    title: "Dica 2",
    content: "Conteúdo da Dica 2",
  },
  
  {
    id: "3",
    title: "Dica 3",
    content: "Conteúdo da Dica 3",
  },
];

export const TipScreen: React.FC<TipScreenProps> = ({ navigation }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  function redirectToHome() {
    navigation.navigate("Home");
  }

  const [fontsLoaded, setFontsLoaded] = useState(false);

async function loadFonts() {
  await Font.loadAsync({
    "Kanit-Bold": require("../../../assets/fonts/kanit/Kanit-Bold.ttf"),
  });
  setFontsLoaded(true);
}
useEffect(() => {
  loadFonts();
}, []);

if (!fontsLoaded) {
  return <Text>Loading...</Text>;
}

  const handleSwipe = (direction: "right" | "left") => {
    if (direction === "right" && currentIndex < DATA.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else if (direction === "left" && currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.scrollViewContent}
      scrollEnabled={true}
    >
      <ImageBackground
        source={require("../../../assets/Images/FundoDicas.jpeg")}
        style={styles.imageBackground}
      >
     <View style={styles.container}>
        <Text style={styles.title}>Dicas de reciclagem</Text>
        <Text style={styles.carouselTitle}>{DATA[currentIndex].title}</Text>
        <View style={styles.navigationButtons}>
         <TouchableOpacity style={styles.navigationButton} onPress={() => handleSwipe("left")}>
         <Image
            source={require('../../../assets/ArrowLeft.png')}
            style={styles.buttonImage}
         />
         </TouchableOpacity>
         <ScrollView
          contentContainerStyle={styles.scrollViewContent}
          scrollEnabled={true}
          >
            <View style={styles.carouselItem}>
              <Text style={styles.carouselContent}>{DATA[currentIndex].content}</Text>
            </View>
          </ScrollView>
         <TouchableOpacity style={styles.navigationButton} onPress={() => handleSwipe("right")}>
         <Image
            source={require('../../../assets/ArrowRight.png')}
            style={styles.buttonImage}
         />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.returnButton} onPress={redirectToHome}>
          <Text>Voltar para home</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    paddingHorizontal: "2%",
  },
  imageBackground: {
    flex: 1,
    alignSelf: "center",
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Kanit-Bold",
    marginTop: "2%",
    fontSize: 38,
    textAlign: "center",
  },
  buttonImage: {
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  carouselItem: {
    flex: 1,
    width: "92%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(60.31, 161, 253.94, 0.90)",
    borderColor: "#00000",
    borderWidth: 3,
    borderRadius: 15,
    marginTop: "5%",
    padding: 24,
  },
  carouselTitle: {
    marginTop: "3%",
    fontSize: 25,
    fontWeight: "bold",
  },
  carouselContent: {
    fontSize: 18,
    textAlign: "center",
  },
  navigationButtons: {
    height: "65%",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: "3%",
  },
  navigationButton: {
    alignSelf: "center",
    backgroundColor: "transparent",
    padding: 10,
    alignItems: "center",
    width: 40,
  },
  returnButton: {
    width: "80%",
    backgroundColor: "#A0D2FF",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#000000",
    padding: 24,
    alignItems: "center",
    marginTop: "8%",
  },
});

export default TipScreen;