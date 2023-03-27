import { StatusBar } from "expo-status-bar";
import { Home } from "./src/screens/Home";
import { AboutPokemon } from "./src/screens/About_Pokemon";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const Navigation = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <StatusBar style="dark" />
      <Navigation.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="home"
      >
        <Navigation.Screen name={"home"} component={Home} />
        <Navigation.Screen name={"about"} component={AboutPokemon} />
      </Navigation.Navigator>
    </NavigationContainer>
  );
}
