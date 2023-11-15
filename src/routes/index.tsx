import { createStackNavigator } from "@react-navigation/stack";
import { QuestionScreen } from "../screens/question";
import { HomeScreen } from "../screens/home";
import { LevelScreen } from "../screens/level";
import { CompleteScreen } from "../screens/complete";
import { ContatoScreen } from "../screens/contato";
import { Level } from "../models/level";
import { CollectScreen } from "../screens/collect";
import { TipScreen } from "../screens/tip";
import NewsScreen from "../screens/news";
import NewsDetailsScreen from "../screens/newsDetails";

export type RootStackParamList = {
  Home: undefined;
  Level: undefined;
  Question: {
    level: Level;
    currentIndex: number;
    lastAnswerWasCorrect?: boolean;
  };
  Complete: undefined;
  Collect: undefined;
  Tip: undefined;
  Contato: undefined;
  News: undefined;
  NewsDetails: {
    id: string;
  };
};

const Stack = createStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Level" component={LevelScreen} />
      <Stack.Screen name="Question" component={QuestionScreen} />
      <Stack.Screen name="Complete" component={CompleteScreen}/>
      <Stack.Screen name="Collect" component={CollectScreen} />
      <Stack.Screen name="Tip" component={TipScreen} />
      <Stack.Screen name="Contato" component={ContatoScreen} />
      <Stack.Screen name="News" component={NewsScreen} />
      <Stack.Screen name="NewsDetails" component={NewsDetailsScreen} />
    </Stack.Navigator>
  );
}
