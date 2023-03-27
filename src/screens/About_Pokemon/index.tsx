import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { styles } from "./style";
import { useAboutPokemon } from "./useAbout_Pokemon";
import { ArrowLeft } from "phosphor-react-native";

export function AboutPokemon() {
  const hook = useAboutPokemon();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.initialDisplay}>
          <TouchableOpacity>
            <View style={{ width: "10%" }}>
              <ArrowLeft size={32} />
            </View>
          </TouchableOpacity>
          <View style={{ width: "90%" }}>
            <Text style={styles.pokemonName}>Bulbasaur</Text>
          </View>
        </View>
        <Text style={styles.pokemonNationalNumber}>001</Text>
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
