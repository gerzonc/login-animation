import { NavigationContainer } from "@react-navigation/native";
import FirstScreen from "./src/screens/first-screen";
import SecondScreen from "./src/screens/second-screen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type RootStackParamList = {
  first: undefined;
  second: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false, animation: 'none' }}>
      <Stack.Screen name="first" component={FirstScreen} />
      <Stack.Screen name="second" component={SecondScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
