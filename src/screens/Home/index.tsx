import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { SlidersHorizontal } from "phosphor-react-native";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Pokédex</Text>
        <Text style={styles.headerDescription}>
          Search for a Pokémon by name or using its National pokedex Number
        </Text>
      </View>
      <View style={styles.searchBarContainer}>
        <TextInput placeholder="Name or number" style={styles.searchBar} placeholderTextColor={'#6C757D'}/>
        <TouchableOpacity style={styles.filterButton}>
          <SlidersHorizontal size={35} color="#ffff"/>
        </TouchableOpacity>
      </View>
    </View>
  );
}
