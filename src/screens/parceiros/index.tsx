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
import { images } from "../../constants/parceiros";

export interface Parceiro {
  id: number;
  nome: string;
  email: string;
}

const ParceiroCard = ({ id, nome, email }: Parceiro) => {
  return (
    <View style={styles.card}>
      <Image source={images[id] ?? images[0]} style={styles.cardImage} />
      <View style={styles.cardContent}>
        <Text style={styles.cardTitle}>{nome}</Text>
        <Text style={styles.cardText} numberOfLines={2}>
          {email}
        </Text>
      </View>
    </View>
  );
};

type ParceirosScreenProps = StackScreenProps<RootStackParamList, "Parceiros">;

const ParceirosScreen: React.FC<ParceirosScreenProps> = ({ navigation }) => {
  const [ParceirosData, setParceirosData] = useState<Parceiro[]>([]);
  const [refreshing, setRefreshing] = useState(false);

  const fetchParceiros = () => {
    setRefreshing(true);
    fetch("https://ekoplayportal.azurewebsites.net/parceiros/search")
      .then((response) => response.json())
      .then((data) => {
        setParceirosData(
          data.map((parceiro: Parceiro) => ({
            ...parceiro,
          }))
        );
      })
      .finally(() => setRefreshing(false));
  };

  useEffect(() => {
    fetchParceiros();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("NovoParceiro")}
      >
        <Text style={styles.btnTxt}>Vire nosso parceiro</Text>
      </TouchableOpacity>
      <FlatList
        data={ParceirosData}
        refreshing={refreshing}
        onRefresh={fetchParceiros}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => {}}>
            <ParceiroCard {...item} />
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
    width: "100%",
    height: 150,
    resizeMode: "center",
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
  btn: {
    width: "100%",
    backgroundColor: "#85FF91",
    borderRadius: 15,
    borderWidth: 2,
    border: "2px black solid",
    padding: 10,
    alignItems: "center",
    marginVertical: 10,
    justifyContent: "center",
  },
  btnTxt: {
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default ParceirosScreen;
