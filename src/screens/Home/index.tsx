import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Keyboard,
} from "react-native";
import { styles } from "./styles";
import { MagnifyingGlass, SlidersHorizontal } from "phosphor-react-native";
import { PokemonCard } from "../../components/PokemonCard";
import { useHome } from "./useHome";
import { LoadingComponent } from "../../components/Loading";
import { Props } from "../../types/Routes";

export function Home({ navigation }: Props) {
  const hook = useHome();
  return (
    <View style={styles.container}>
      <View style={styles.hederContainer}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Pokédex</Text>
          <Text style={styles.headerDescription}>
            Search for a Pokémon by name or using its National pokedex Number
          </Text>
        </View>
        <View style={styles.searchBarContainer}>
          <TextInput
            placeholder="Name or number"
            style={styles.searchBar}
            placeholderTextColor={"#6C757D"}
            value={hook.searchPokemonValue}
            onChangeText={hook.setSearchPokemonValue}
          />
          <View style={styles.searchActions}>
            <TouchableOpacity
              style={styles.filterButton}
              onPress={() => {
                hook.searchPokemon();
                Keyboard.dismiss();
              }}
            >
              <MagnifyingGlass size={30} color="#ffff" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.filterButton}>
              <SlidersHorizontal size={30} color="#ffff" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {hook.requestError && <Text>Erro</Text>}
      {hook.selectedPokemon ? (
        <View
          style={{
            marginTop: 60,
            justifyContent: "center",
            alignItems: "center",
            height: 320,
          }}
        >
          <PokemonCard
            pokemonName={hook.selectedPokemon.name}
            pokemonIndexImg={hook.selectedPokemon.id}
            action={() =>
              navigation.navigate("about", {
                pokemonName: hook.selectedPokemon?.name,
                pokemonNumber: hook.selectedPokemon?.id,
              })
            }
          />
        </View>
      ) : (
        <View style={styles.pokemonListWrapper}>
          <FlatList
            data={hook.pokemonsList}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => (
              <PokemonCard
                pokemonName={item.name}
                pokemonIndexImg={item.id}
                key={item.id}
                action={() =>
                  navigation.navigate("about", {
                    // pokemonName: item.name,
                    pokemonNumber: item.id,
                  })
                }
              />
            )}
            numColumns={2}
            ItemSeparatorComponent={() => (
              <View style={{ paddingVertical: 10 }} />
            )}
            columnWrapperStyle={{ gap: 20 }}
            showsVerticalScrollIndicator={false}
            onEndReached={hook.getPokemons}
            contentContainerStyle={{ alignItems: "center" }}
            onEndReachedThreshold={0.9}
            ListFooterComponent={<LoadingComponent loading={hook.loading} />}
          />
        </View>
      )}
    </View>
  );
}
