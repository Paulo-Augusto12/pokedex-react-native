import React from "react";
import { View, Text, ColorValue } from "react-native";
import { styles } from "./style";
import { IPokemonAbilityDTO } from "../../api/DTO/IPokemonAbilityDTO";
import { LoadingComponent } from "../Loading";

interface IAbilitiesCardProps {
  pokemonAbilities: IPokemonAbilityDTO[];
  containerBackgroundColor: ColorValue;
  descriptionTextColor: ColorValue;
}
export function AbilitiesCard({
  pokemonAbilities,
  containerBackgroundColor,
  descriptionTextColor,
}: IAbilitiesCardProps) {
  return (
    <View style={styles.container}>
      {pokemonAbilities.length ? (
        <>
          {pokemonAbilities.map((ability) => (
            <>
              <View style={styles.AbilityNameWrapper}>
                <Text style={styles.AbilityName}>{ability.name}</Text>
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
                  {ability.effect_entries.map(
                    (description) => description.effect
                  )}
                </Text>
              </View>
            </>
          ))}
        </>
      ) : (
        <LoadingComponent loading={!pokemonAbilities.length} />
      )}
    </View>
  );
  // Testa fazer a flatilist aqui ao invés da página em si, veja como seria uma lista de IPokemonAbilitiesDTO e passe esse array via props
}
