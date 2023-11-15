import React, { useEffect, useState } from "react";
import { View, Text, Image, StyleSheet, ScrollView, } from "react-native";
import { News } from "../news";
import { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../../routes";

type NewsDetailsScreenProps = StackScreenProps<
  RootStackParamList,
  "NewsDetails"
>;

const NewsDetailsScreen: React.FC<NewsDetailsScreenProps> = ({ route }) => {
  const [newsData, setNewsData] = useState<News>();
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetch(
      `https://ekoplayportal.azurewebsites.net/noticias/search/${route.params.id}`
    )
      .then((response) => response.json())
      .then((data) => {
        setNewsData(data);
        setImageUrl(
          `https://source.unsplash.com/1600x900/?sustainability#${route.params.id}`
        );
      });
  }, []);

  if (!newsData) {
    return <Text>Loading...</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent} scrollEnabled={true}>
    <View style={styles.container}>
      {imageUrl && <Image source={{ uri: imageUrl }} style={styles.image} />}
      <Text style={styles.title}>{newsData.titulo}</Text>
      <Text style={styles.content}>{newsData.conteudo}</Text>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    padding: 10,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  content: {
    fontSize: 16,
  },
});

export default NewsDetailsScreen;
