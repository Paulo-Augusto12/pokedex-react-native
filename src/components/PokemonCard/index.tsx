import React from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";

interface IPokemonCard {
  pokemonName: string;
}
export function PokemonCard({ pokemonName }: IPokemonCard) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
            }}
            style={{ height: 109, width: 105 }}
          />
        </View>
        <View style={styles.pokemonData}>
          <Text>{pokemonName}</Text>
          <Text>001</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
