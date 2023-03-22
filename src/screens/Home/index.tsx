import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { styles } from "./styles";
import { MagnifyingGlass, SlidersHorizontal } from "phosphor-react-native";
import { PokemonCard } from "../../components/PokemonCard";
import { useHome } from "./useHome";
import { LoadingComponent } from "../../components/Loading";

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
                <View style={styles.searchActions}>
                  <TouchableOpacity style={styles.filterButton}>
                    <MagnifyingGlass size={30} color="#ffff"/>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.filterButton}>
                    <SlidersHorizontal size={30} color="#ffff" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          renderItem={({ item }) => (
            <PokemonCard pokemonName={item.name} pokemonIndexImg={item.id} />
          )}
          numColumns={2}
          ItemSeparatorComponent={() => <View style={{ padding: 10 }} />}
          columnWrapperStyle={{ gap: 20 }}
          showsVerticalScrollIndicator={false}
          onEndReached={hook.getPokemons}
          contentContainerStyle={{ alignItems: "center", gap: 30 }}
          onEndReachedThreshold={0.1}
          ListFooterComponent={<LoadingComponent loading={hook.loading} />}
        />
      </View>
    </View>
  );
}
