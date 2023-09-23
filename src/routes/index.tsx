import { createStackNavigator } from "@react-navigation/stack";
import { QuestionScreen } from "../screens/question";
import { HomeScreen } from "../screens/home";

export type RootStackParamList = {
  Home: undefined;
  Question: undefined;
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
      <Stack.Screen name="Question" component={QuestionScreen} />
    </Stack.Navigator>
  );
}
