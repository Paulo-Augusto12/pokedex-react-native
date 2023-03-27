import React from "react";

import { View, Text, Image, TouchableOpacity } from "react-native";
import { styles } from "./style";

interface IPokemonCard {
  pokemonName: string;
  pokemonIndexImg: number;
  action: () => void;
}
export function PokemonCard({
  pokemonName,
  pokemonIndexImg,
  action,
}: IPokemonCard) {
  return (
    <TouchableOpacity onPress={() => action()}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonIndexImg}.png`,
            }}
            style={{ height: 109, width: 105 }}
          />
        </View>
        <View style={styles.pokemonData}>
          <Text>{pokemonName}</Text>
          {pokemonIndexImg < 10 ? (
            <Text>00{pokemonIndexImg}</Text>
          ) : pokemonIndexImg < 100 ? (
            <Text>0{pokemonIndexImg}</Text>
          ) : (
            <Text>{pokemonIndexImg}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}
