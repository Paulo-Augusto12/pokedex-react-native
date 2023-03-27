import { StatusBar } from "expo-status-bar";
import { Home } from "./src/screens/Home";
import { AboutPokemon } from "./src/screens/About_Pokemon";

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <AboutPokemon />
    </>
  );
}
