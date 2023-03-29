import React, { useEffect } from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { styles } from "./style";
import { useAboutPokemon } from "./useAbout_Pokemon";
import { ArrowLeft, CaretLeft, CaretRight } from "phosphor-react-native";
import { Props } from "../../types/Routes";
import { useTheme } from "../../hook/useTheme";
import { LoadingComponent } from "../../components/Loading";
import { AbilitiesCard } from "../../components/AbilityCard";

export function AboutPokemon({ navigation, route }: Props) {
  const hook = useAboutPokemon();

  useEffect(() => {
    hook.handleGetPokemonData(route.params.pokemonNumber);

    console.log(route.params.pokemonNumber)
  }, [route.params.pokemonNumber]);
  return (
    <>
      {!hook.backgroundTypeColor.color.trim() && (
        <LoadingComponent loading={!hook.backgroundTypeColor.color.trim()} />
      )}
      <View style={styles.container}>
        {!hook.pokemonData ? (
          <View>
            <LoadingComponent loading={!hook.pokemonData} />
          </View>
        ) : (
          <View>
            {!hook.backgroundTypeColor.color.trim() ? (
              <View>
                <LoadingComponent loading={!hook.pokemonData} />
              </View>
            ) : (
              <View
                style={[
                  styles.pokemonImageContainer,
                  {
                    backgroundColor: hook.backgroundTypeColor.color,
                    height: 460,
                  },
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
                        {hook.pokemonData.name[0].toUpperCase() +
                          hook.pokemonData.name.substring(1)}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.numberActions}>
                    <TouchableOpacity
                    onPress={() => {
                      navigation.navigate("about", {
                        pokemonNumber: hook.pokemonData.id  - 1,
                      });
                    }}
                    >
                      <CaretLeft
                        size={35}
                        color={
                          hook.backgroundTypeColor.nationalNumberColor as string
                        }
                      />
                    </TouchableOpacity>
                    {route.params.pokemonNumber < 10 ? (
                      <Text
                        style={[
                          styles.pokemonNationalNumber,
                          {
                            color: hook.backgroundTypeColor
                              .nationalNumberColor as string,
                          },
                        ]}
                      >
                        00{route.params.pokemonNumber}
                      </Text>
                    ) : route.params.pokemonNumber < 100 ? (
                      <Text
                        style={[
                          styles.pokemonNationalNumber,
                          {
                            color: hook.backgroundTypeColor
                              .nationalNumberColor as string,
                          },
                        ]}
                      >
                        0{route.params.pokemonNumber}
                      </Text>
                    ) : (
                      <Text
                        style={[
                          styles.pokemonNationalNumber,
                          {
                            color: hook.backgroundTypeColor
                              .nationalNumberColor as string,
                          },
                        ]}
                      >
                        {route.params.pokemonNumber}
                      </Text>
                    )}
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("about", {
                          pokemonNumber: hook.pokemonData.id + 1,
                        });
                      }}
                    >
                      <CaretRight
                        size={35}
                        color={
                          hook.backgroundTypeColor.nationalNumberColor as string
                        }
                      />
                    </TouchableOpacity>
                  </View>
                </View>

                <Image
                  source={{
                    uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${route.params.pokemonNumber}.png`,
                  }}
                  style={styles.pokemonImage}
                />
              </View>
            )}
            {!hook.flavorText.trim() && (
              <LoadingComponent loading={!hook.flavorText.trim()} />
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
                            hook.selectedTag === item.id
                              ? "#000000"
                              : "#6C757D",
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
        {hook.pokemonData?.abilities?.length > 0 && (
          <View style={styles.pokemonAbilitiesContainer}>
            <AbilitiesCard
              pokemonAbilities={hook.pokemonData.abilities}
              containerBackgroundColor={
                hook.backgroundTypeColor.color as string
              }
              descriptionTextColor={
                hook.backgroundTypeColor.nameColor as string
              }
            />
          </View>
        )}
      </View>
    </>
  );
}
