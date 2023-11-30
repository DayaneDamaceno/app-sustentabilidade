//Nova tela de pontos de coleta

import { StackScreenProps } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Platform, StatusBar, ScrollView, TouchableOpacity, ImageBackground, } from "react-native";
import { RootStackParamList } from "../../routes";
import * as Font from "expo-font";

type CollectScreenProps = StackScreenProps<RootStackParamList, "Collect">;

export const CollectScreen: React.FC<CollectScreenProps> = ({ navigation }) => {
  function redirectToHome() {
    navigation.navigate("Home");
  }

  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [buttonsVisible, setButtonsVisible] = useState(true);
  const [toggleButtonVisible, setToggleButtonVisible] = useState(false);
  const [carouselVisible, setCarouselVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

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

  const handleButtonClick = (category: string) => {
    setToggleButtonVisible(true);
    setButtonsVisible(false);
    setCarouselVisible(true);
    setSelectedCategory(category);
  };

  const handleToggleButtonClick = () => {
    setButtonsVisible(true);
    setToggleButtonVisible(false);
    setCarouselVisible(false);
    setSelectedCategory("");
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent} scrollEnabled={!carouselVisible}>
      <ImageBackground
        source={require("../../../assets/Images/Jacaredboas.png")}
        style={styles.imageBackground}
      >
    <View style={styles.container}>
      <Text style={styles.title}>Pontos de coleta</Text>
       {buttonsVisible && (
            <>
      <TouchableOpacity style={styles.TurnButton} onPress={() => handleButtonClick("LÂMPADAS FLUORESCENTES")}>
        <Text>LÂMPADAS FLUORESCENTES</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.TurnButton} onPress={() => handleButtonClick("PILHAS")}>
        <Text>PILHAS</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.TurnButton} onPress={() => handleButtonClick("ENTULHO, MADEIRA, RESÍDUOS VOLUMOSOS")}>
        <Text>ENTULHO, MADEIRA, RESÍDUOS VOLUMOSOS</Text>
      </TouchableOpacity>
          </>
          )}
          {toggleButtonVisible && (
            <>
            <View style={styles.carouselItem}>
            {selectedCategory === "LÂMPADAS FLUORESCENTES" && (
            <ScrollView contentContainerStyle={styles.carouselScrollViewContent}
             scrollEnabled={carouselVisible}
             style={styles.maxHeight}>
                <Text style={styles.carouselContent}> ASSAÍ-274-SÃO BERNARDO ANCHIETA PAULICÉIA
R. GARCIA LORCA, 301, PAULICEIA - 09695-000
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> ASSAÍ-ANCHIETA (203)
AV. DO TABOÃO, 574 , TABOÃO, SÃO BERNARDO DO CAMPO, SP - 09655-000
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> ASSAÍ – SÃO BERNARDO (10)
AV. PIRAPORINHA, 680, PLANALTO, SÃO BERNARDO DO CAMPO, SP
09891-001
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> ATACADÃO 324 SÃO BERNARDO DEMARCHI
AV. MARIA SERVIDEI DEMARCHI, 3000, DEMARCHI, SÃO BERNARDO DO CAMPO, SP
09820-00
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> ATACADÃO 86 SÃO BERNARDO DO CAMPO
AV. PIRAPORINHA, 837, PLANALTO, SÃO BERNARDO DO CAMPO, SP
09891-001
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> BIG SBC
R. MARECHAL DEODORO, 2785, CENTRO, SÃO BERNARDO DO CAMPO, SP
09710-193
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> CARREFOUR – CSB – BAIRRO SAO BERNARDO
R. JOSÉ BENEDETTI, 247, CENTRO, SÃO BERNARDO DO CAMPO, SP
09770-140
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> CARREFOUR – SBD – CRFO DEMARCHI
AV. MARIA SERVIDEI DEMARCHI, 398, DEMARCHI, SÃO BERNARDO DO CAMPO, SP
09820-000
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> CARREFOUR – SBP – CRFO SAO B DO CAMPO PAULICEIA
AV. TABOÃO, 2000, TABOÃO, SÃO BERNARDO DO CAMPO, SP
09655-000
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> CARREFOUR S.B. CAMPO
AV. SENADOR VERGUEIRO, 2100, JARDIM TRÊS MARIAS, SÃO BERNARDO DO CAMPO, SP
09750-001
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> CEC – LOJA SBC
AV. KENNEDY, 377/415, JARDIM DO MAR, SÃO BERNARDO DO CAMPO, SP
09726-261       
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> CENTER CASTILHO
AV. ROTARY, 825, FERRAZÓPOLIS, SÃO BERNARDO DO CAMPO, SP
09721-000
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> CENTER CASTILHO
AV. RUDGE RAMOS, 790, RUDGE RAMOS, SÃO BERNARDO DO CAMPO, SP
09638-000
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> CENTER CASTILHO ROTARY
AV. ROTARY, 825, FERRAZÓPOLIS, SÃO BERNARDO DO CAMPO, SP
09721-000
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> CENTER CASTILHO RUDGE RAMOS
AV. RUDGE RAMOS, 790, RUDGE RAMOS, SÃO BERNARDO DO CAMPO, SP
09638-000
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> DEPÓSITO RIACHO
R. ANTÔNIO CAPUTO, 331, RIACHO GRANDE, SÃO BERNARDO DO CAMPO, SP
09830-285
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> LEROY SBC
R. FUAD MUSSA CHEID, 190, PLANALTO, SÃO BERNARDO DO CAMPO, SP
09890-140
                </Text>
              </ScrollView>
              )}

              {selectedCategory === "PILHAS" && (
            <ScrollView contentContainerStyle={styles.carouselScrollViewContent}
             scrollEnabled={carouselVisible}
             style={styles.maxHeight}>
                <Text style={styles.carouselContent}> GOLDEN SHOPPING SBC - MINUTO PA - Avenida Kennedy, 700 - Vila Marlene - SÃO BERNARDO DO CAMPO, SP
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> MINUTO PA - Avenida Francisco Prestes Maia, 1001 - Centro - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> ATACADÃO  - Avenida Piraporinha, 837 - Planalto -SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> ASSAÍ 10 - Avenida Piraporinha, 680 - Planalto - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> ASSAÍ 203 - Avenida do Taboão, 574 - Taboão - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> CARREFOUR - AVENIDA MARIA SERVIDEI DEMARCHI, 398 - DEMARCHI - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> CARREFOUR - AVENIDA DO TABOÃO, 2000 - PAULICEIA - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> CARREFOUR SBC - AV SENADOR VERGUEIRO, 2000 - JD TRES MARIAS - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> CARREFOUR - RUA JOSÉ BENEDETTI, 247 - CENTRO - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> Casas Bahia - Rua Marechal Deodoro, 987, - Centro - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> Casas Bahia - Avenida do Taboão, 3990 - Taboão - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> Casas Bahia - Rua Marechal Deodoro, 1381 - Centro - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> Casas Bahia - Avenida Senador Vergueiro, 5058 - Rudge Ramos - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> COOP - AV. PRES. JOÃO CAFÉ FILHO, 2231 - BAIRRO DOS CASAS	- SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> COOP - AV. HUMBERTO DE ALENCAR CASTELO BRANCO, 1496 - ASSUNÇÃO (PIRAPORINHA) - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> COOP - R. JOAQUIM NABUCO, 277 - CENTRO - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> COOP - AV. DR. RUDGE RAMOS, 500 - RUDGE RAMOS	SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> COOP - R. DOS VIANAS, 1631 - BAETA NEVES - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> DROGA RAIA - RUA MARECHAL DEODORO, 817 - CENTRO - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> DROGA RAIA - RUA MARECHAL DEODORO, 1577 - CENTRO - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> DROGA RAIA - AV. DR. FLAQUER, 787, loja 01 - CENTRO - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> DROGA RAIA - AV. KENNEDY, 334 - JD MAR - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> DROGA RAIA - AV. DR. RUDGE RAMOS, 59 - R RAMOS - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> DROGA RAIA - AV. FRANCISCO PRESTES MAIA, 947 - CENTRO - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> Drogaria São Paulo - AV. JOAO FIRMINO, 1000  -  ASSUNCAO- SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> Drogaria São Paulo - AV. LUCAS NOGUEIRA GARCEZ, 607 - CENTRO - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> Drogaria São Paulo - R JURUBATUBA, 1500 LJ 02 LJ 03 - CENTRO - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> Drogaria São Paulo - AV. KENNEDY, 221 - JARDIM DO MAR - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> Drogaria São Paulo - R PRINCESA MARIA AMELIA, 100 -	NOVA PETROPOLIS - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> Drogaria São Paulo - AV. HUMBERTO DE A. C. BRANCO, 3634  - PARQUE NEIDE - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> Drogaria São Paulo - AV. ALVARO GUIMARAES, 471 - PLANALTO - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> Drogaria São Paulo - AV. DOM JAIME DE BARROS CAMARA, 620  - PLANALTO - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> Drogaria São Paulo - AV. FRANCISCO PRESTES MAIA, 73  - CENTRO - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> Drogaria São Paulo - AV. DR RUDGE RAMOS, 570 - RUDGE RAMOS - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> Drogaria São Paulo - AV. SENADOR VERGUEIRO, 4193 4199 - RUDGE RAMOS - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> Drogaria São Paulo - R MARECHAL DEODORO, 1305, -	CENTRO	SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> KALUNGA - Avenida Rotary, 624 - Centro - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> KALUNGA - Avenida Kennedy, 700  - Jardim do Mar - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> KALUNGA - JURUBATUBA, 674  -	VILA CAMPESTRE - SÃO BERNARDO DO CAMPO
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> DROGASIL - AV. ROTARY, 624 - CENTRO	- SÃO BERNARDO DO CAMPO
                </Text>
              </ScrollView>
              )}
            {selectedCategory === "ENTULHO, MADEIRA, RESÍDUOS VOLUMOSOS" && (
              <ScrollView contentContainerStyle={styles.carouselScrollViewContent}
               scrollEnabled={carouselVisible}
               style={styles.maxHeight}>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> AREIÃO - Rua do Cruzeiro s/nº
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> BAIRRO DOS CASA - Avenida Capitão Casa, 687
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> BATISTINI -  Rua das Flores, 950
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> DER - Rua Ernesto Bezerra, 60
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> DIVINÉIA - Rua Mathilde Ferrari Marçon, altura do nº 30
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> JARDIM REGINA - Rua João de Barro, altura do nº 207
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> MONTANHÃO - Estrada do Montanhão, 152
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> PARQUE DOS PÁSSAROS - Rua dos Tangarás, 867
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> PARQUE SÃO BERNARDO - Rua Almeida Leme s/nº
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> RIACHO GRANDE - Rua Marcílio Conrado, 600 
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> RUDGE RAMOS - Rua Guilherme de Almeida, 86
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> TABOÃO - Rua Pedro Ivo, 110
                </Text>
                <Text style={styles.carouselContent}> ___________________________
                </Text>
                <Text style={styles.carouselContent}> TRÊS MARIAS - Estrada Eiji Kikuti, 1.892
                </Text>
              </ScrollView>
            )}
            </View>
              <TouchableOpacity style={styles.toggleButton} onPress={handleToggleButtonClick}>
                <Text>Voltar</Text>
              </TouchableOpacity>
            </>
            )}
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
    height: "100%",
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 24,
  },
  maxHeight: {
    maxHeight: 500,
  },
  carouselContent: {
    fontSize: 18,
    textAlign: "center",
  },
  carouselScrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselItem: {
    width: "100%",
    height: "50%",
    justifyContent: "center",
    alignItems: "center",
    padding: "5%",
    backgroundColor: "#FFDFAF",
    borderColor: "#00000",
    borderWidth: 3,
    borderRadius: 15,
  },
  toggleButton: {
    height: "7%",
    width: "60%",
    backgroundColor: "#FFDFAF",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#000000",
    marginTop: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    flex: 1,
    alignSelf: "center",
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    justifyContent: "center",
  },
  title: {
    fontFamily: "Kanit-Bold",
    fontSize: 40,
    marginTop: "5%",
    marginBottom: "5%",
    textAlign: "center",
  },
  collectionBox: {
    backgroundColor: "rgba(90.48, 255, 87.13, 0.90)",
    borderColor: "#00000",
    borderWidth: 5,
    borderRadius: 20,
    padding: 24,
    marginTop: 20,
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  collectionItem: {
    fontSize: 18,
    marginBottom: 10,
  },
  returnButton: {
    height: "9%",
    width: "60%",
    backgroundColor: "#FFDFAF",
    borderRadius: 20,
    borderWidth: 3,
    borderColor: "#000000",
    alignItems: "center",
    alignSelf: "center",
    justifyContent: "center",
    marginTop: "10%"
  },
  TurnButton: {
    height: "10%",
    width: "80%",
    backgroundColor: "#FFDFAF",
    borderRadius: 20,
    borderWidth: 3,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#000000",
    marginTop: "10%",
  },
});
