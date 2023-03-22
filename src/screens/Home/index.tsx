import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { styles } from "./styles";
import { SlidersHorizontal } from "phosphor-react-native";
import { PokemonCard } from "../../components/PokemonCard";
import { useHome } from "./useHome";

export function Home() {
  const hook = useHome();
  return (
    <View style={styles.container}>
      <View style={styles.pokemonListWrapper}>
        <FlatList
          data={hook.pokemonsList}
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
          renderItem={({ item }) => <PokemonCard pokemonName={item.name} />}
          numColumns={2}
          ItemSeparatorComponent={() => <View style={{ padding: 20 }} />}
          columnWrapperStyle={{ gap: 20 }}
          showsVerticalScrollIndicator={true}
          onEndReached={hook.getPokemons}
          contentContainerStyle={{ alignItems: "center", gap: 30 }}
          onEndReachedThreshold={0.7}
          ListFooterComponent={() => (
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <ActivityIndicator size={30} color="#BAC0D4" />
            </View>
          )}
        />
      </View>
    </View>
  );
}
