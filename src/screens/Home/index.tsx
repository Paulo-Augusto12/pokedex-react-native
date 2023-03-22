import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import { SlidersHorizontal } from "phosphor-react-native";
import { PokemonCard } from "../../components/PokemonCard";

export function Home() {
  const data = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ];
  return (
    <View style={styles.container}>
      <View style={styles.pokemonListWrapper}>
        <FlatList
          data={data}
          ListHeaderComponent={() => (
            <View style={styles.hederContainer}>
              <View style={styles.header}>
                <Text style={styles.headerTitle}>Pokédex</Text>
                <Text style={styles.headerDescription}>
                  Search for a Pokémon by name or using its National pokedex
                  Number
                </Text>
              </View>
              <View style={styles.searchBarContainer}>
                <TextInput
                  placeholder="Name or number"
                  style={styles.searchBar}
                  placeholderTextColor={"#6C757D"}
                />
                <TouchableOpacity style={styles.filterButton}>
                  <SlidersHorizontal size={35} color="#ffff" />
                </TouchableOpacity>
              </View>
            </View>
          )}
          renderItem={({ item }) => <PokemonCard />}
          numColumns={2}
          ItemSeparatorComponent={() => <View style={{ padding: 20 }} />}
          columnWrapperStyle={{ gap: 20 }}
          showsVerticalScrollIndicator={false}
          onEndReached={() => {
            console.log("aaaaa");
          }}
          contentContainerStyle={{ alignItems: "center", gap: 30 }}
          onEndReachedThreshold={0.2}
        />
      </View>
    </View>
  );
}
