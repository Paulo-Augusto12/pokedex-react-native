import React, { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { styles } from "./style";
import { useAboutPokemon } from "./useAbout_Pokemon";
import { ArrowLeft } from "phosphor-react-native";
import { Props } from "../../types/Routes";
import { useTheme } from "../../hook/useTheme";
import { LoadingComponent } from "../../components/Loading";
import { AbilitiesCard } from "../../components/AbilityCard";

export function AboutPokemon({ navigation, route }: Props) {
  const hook = useAboutPokemon();

  useEffect(() => {
    hook.handleGetPokemonData(route.params.pokemonName);
  }, [hook.pokemonData]);
  return (
    <View style={styles.container}>
      {!route.params.pokemonName.trim() ? (
        <View>
          <LoadingComponent loading={!route.params.pokemonName.trim()} />
        </View>
      ) : (
        <View>
          {!hook.backgroundTypeColor.color.trim() ? (
            <View>
              <LoadingComponent loading={!route.params.pokemonName.trim()} />
            </View>
          ) : (
            <View
              style={[
                styles.pokemonImageContainer,
                { backgroundColor: hook.backgroundTypeColor.color },
              ]}
            >
              <View style={styles.header}>
                <View style={styles.initialDisplay}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <View style={{ width: "10%" }}>
                      <ArrowLeft
                        size={32}
                        color={hook.backgroundTypeColor.nameColor}
                      />
                    </View>
                  </TouchableOpacity>
                  <View style={{ width: "90%" }}>
                    <Text
                      style={[
                        styles.pokemonName,
                        { color: hook.backgroundTypeColor.nameColor },
                      ]}
                    >
                      {route.params.pokemonName[0].toUpperCase() +
                        route.params.pokemonName.substring(1)}
                    </Text>
                  </View>
                </View>

                {route.params.pokemonNumber < 10 ? (
                  <Text
                    style={[
                      styles.pokemonNationalNumber,
                      { color: hook.backgroundTypeColor.nationalNumberColor },
                    ]}
                  >
                    00{route.params.pokemonNumber}
                  </Text>
                ) : route.params.pokemonNumber < 100 ? (
                  <Text
                    style={[
                      styles.pokemonNationalNumber,
                      { color: hook.backgroundTypeColor.nationalNumberColor },
                    ]}
                  >
                    0{route.params.pokemonNumber}
                  </Text>
                ) : (
                  <Text
                    style={[
                      styles.pokemonNationalNumber,
                      { color: hook.backgroundTypeColor.nationalNumberColor },
                    ]}
                  >
                    {route.params.pokemonNumber}
                  </Text>
                )}
              </View>

              <Image
                source={{
                  uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${route.params.pokemonNumber}.png`,
                }}
                style={styles.pokemonImage}
              />
            </View>
          )}
          <View style={styles.flavorText}>
            {hook.pokemonSpeciesData && (
              <View>
                <Text style={styles.description}>{hook.flavorText}</Text>
              </View>
            )}
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
                        color:
                          hook.selectedTag === item.id ? "#000000" : "#6C757D",
                        fontSize: 16,
                        fontWeight:
                          hook.selectedTag === item.id ? "bold" : "600",
                      }}
                    >
                      {item.tagName}
                    </Text>
                  </View>
                </TouchableOpacity>
              )}
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      )}
      {/* <Text>a</Text> */}
      {hook.backgroundTypeColor.color.trim() && (
        <View style={styles.pokemonAbilitiesContainer}>
          <FlatList
            data={["", ""]}
            renderItem={({ item }) => (
              <AbilitiesCard
                abilityDescription="A strange seed was planted on its back at birth. The plant sprouts and grows with this POKéMON."
                abilityName="Clorophyle"
                containerBackgroundColor={hook.backgroundTypeColor.color}
                descriptionTextColor={hook.backgroundTypeColor.nameColor}
              />
            )}
            ItemSeparatorComponent={() => (
              <View style={{ padding: 10, paddingBottom: 10 }} />
            )}
            showsVerticalScrollIndicator={false}
          />
        </View>
      )}
    </View>
  );
}
