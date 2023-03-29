import React, { useEffect } from "react";
import { View, Text, ColorValue, FlatList } from "react-native";
import { styles } from "./style";
import { IPokemonAbilityDTO } from "../../api/DTO/IPokemonAbilityDTO";
import { LoadingComponent } from "../Loading";
import { IPokemonAbilities } from "../../screens/About_Pokemon/useAbout_Pokemon";

interface IAbilitiesCardProps {
  pokemonAbilities: IPokemonAbilities[];
  containerBackgroundColor: ColorValue;
  descriptionTextColor: ColorValue;
}
export function AbilitiesCard({
  pokemonAbilities,
  containerBackgroundColor,
  descriptionTextColor,
}: IAbilitiesCardProps) {
  useEffect(() => {
    console.log(pokemonAbilities, "abilitiesaaaaaaaaaaaaaaaaaa");
  }, []);
  return (
    <View style={styles.container}>
      {pokemonAbilities.length ? (
        <FlatList
          data={pokemonAbilities}
          renderItem={({ item }) => (
            <>
              <View style={styles.AbilityNameWrapper}>
                <Text style={styles.AbilityName}>{item.name}</Text>
              </View>

              <View
                style={[
                  styles.abilityContainer,
                  { backgroundColor: containerBackgroundColor },
                ]}
              >
                <Text
                  style={[
                    styles.abilityDescription,
                    { color: descriptionTextColor },
                  ]}
                >
                  {item.effect}
                </Text>
              </View>
            </>
          )}
          ItemSeparatorComponent={() => (
            <View style={{ padding: 10, paddingBottom: 10 }} />
          )}
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <LoadingComponent loading={!pokemonAbilities.length} />
      )}
    </View>
  );
  // Testa fazer a flatilist aqui ao invés da página em si, veja como seria uma lista de IPokemonAbilitiesDTO e passe esse array via props
}
