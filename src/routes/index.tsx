import { createStackNavigator } from "@react-navigation/stack";
import { QuestionScreen } from "../screens/question";
import { HomeScreen } from "../screens/home";
import { LevelScreen } from "../screens/level";
import { CompleteScreen } from "../screens/complete";
import { ContatoScreen } from "../screens/contato";
import { Level } from "../models/level";

export type RootStackParamList = {
  Home: undefined;
  Level: undefined;
  Question: {
    level: Level;
    currentIndex: number;
    lastAnswerWasCorrect?: boolean;
  };
  Complete: undefined;
  Contato: undefined
};

const Stack = createStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Level" component={LevelScreen} />
      <Stack.Screen name="Question" component={QuestionScreen} />
      <Stack.Screen name="Complete" component={CompleteScreen} />
      <Stack.Screen name="Contato" component={ContatoScreen} />
    </Stack.Navigator>
  );
}
