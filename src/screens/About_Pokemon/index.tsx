import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { styles } from "./style";
import { useAboutPokemon } from "./useAbout_Pokemon";
import { ArrowLeft } from "phosphor-react-native";
import { Props } from "../../types/Routes";

export function AboutPokemon({ navigation, route }: Props) {
  const hook = useAboutPokemon();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.initialDisplay}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={{ width: "10%" }}>
              <ArrowLeft size={32} />
            </View>
          </TouchableOpacity>
          <View style={{ width: "90%" }}>
            <Text style={styles.pokemonName}>
              {route.params.pokemonName[0].toUpperCase() +
                route.params.pokemonName.substring(1)}
            </Text>
          </View>
        </View>

        {route.params.pokemonNumber < 10 ? (
          <Text style={styles.pokemonNationalNumber}>
            00{route.params.pokemonNumber}
          </Text>
        ) : route.params.pokemonNumber < 100 ? (
          <Text style={styles.pokemonNationalNumber}>
            0{route.params.pokemonNumber}
          </Text>
        ) : (
          <Text style={styles.pokemonNationalNumber}>
            {route.params.pokemonNumber}
          </Text>
        )}
      </View>
      <View style={styles.pokemonImageContainer}>
        <Image
          source={{
            uri: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
          }}
          style={styles.pokemonImage}
        />
      </View>
      <View style={styles.actionMenu}>
        <FlatList
          horizontal
          ItemSeparatorComponent={() => <View style={{ padding: 15 }} />}
          data={hook.menuActionTags}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => hook.setSelectedTag(item.id)}
            >
              <View>
                <Text
                  style={{
                    color: hook.selectedTag === item.id ? "#000000" : "#6C757D",
                    fontSize: 16,
                    fontWeight: hook.selectedTag === item.id ? "bold" : "600",
                  }}
                >
                  {item.tagName}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
