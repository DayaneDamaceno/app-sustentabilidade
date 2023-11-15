import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { RootStackParamList } from "../../routes";
import { StackScreenProps } from "@react-navigation/stack";

export interface News {
  id: string;
  titulo: string;
  conteudo: string;
}

const NewsCard = ({ id, titulo, conteudo }: News) => {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: `https://source.unsplash.com/1600x900/?sustainability#${id}`,
        }}
        style={styles.cardImage}
      />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{titulo}</Text>
        <Text style={styles.cardText} numberOfLines={2}>
          {conteudo}
        </Text>
      </View>
    </View>
  );
};

type NewsScreenProps = StackScreenProps<RootStackParamList, "News">;

const NewsScreen: React.FC<NewsScreenProps> = ({ navigation }) => {
  const [newsData, setNewsData] = useState<News[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  function redirectToDetails(id: string) {
    navigation.navigate("NewsDetails", { id });
  }

  const fetchNews = () => {
    setRefreshing(true);
    fetch("https://ekoplayportal.azurewebsites.net/noticias/search")
      .then((response) => response.json())
      .then((data) =>
        setNewsData(
          data.map((news: News) => ({
            ...news,
          }))
        )
      )
      .finally(() => setRefreshing(false));
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={newsData}
        refreshing={refreshing}
        onRefresh={fetchNews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => redirectToDetails(item.id)}>
            <NewsCard {...item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    overflow: "hidden",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardImage: {
    height: 200,
    width: "100%",
  },
  cardContent: {
    padding: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  cardText: {
    fontSize: 16,
  },
});

export default NewsScreen;
