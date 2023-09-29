import { createStackNavigator } from "@react-navigation/stack";
import { QuestionScreen } from "../screens/question";
import { HomeScreen } from "../screens/home";
import { LevelScreen } from "../screens/level";
import { CompleteScreen } from "../screens/complete";

export type RootStackParamList = {
  Home: undefined;
  Level: undefined;
  Question: { currentIndex: number};
  Complete: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export function Routes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      // screenOptions={{
      //   headerShown: false,
      // }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Level" component={LevelScreen} />
      <Stack.Screen name="Question" component={QuestionScreen} />
      <Stack.Screen name="Complete" component={CompleteScreen} />
    </Stack.Navigator>
  );
}
