import React from "react";
import { View, Text, ColorValue } from "react-native";
import { styles } from "./style";

interface IAbilitiesCardProps {
  abilityName: string;
  abilityDescription: string[];
  containerBackgroundColor: ColorValue | undefined;
  descriptionTextColor: ColorValue | undefined;
}
export function AbilitiesCard({
  abilityDescription,
  abilityName,
  containerBackgroundColor,
  descriptionTextColor,
}: IAbilitiesCardProps) {
  return (
    // Testa fazer a flatilist aqui ao invés da página em si, veja como seria uma lista de IPokemonAbilitiesDTO e passe esse array via props
    <View style={styles.container}>
      {abilityDescription.map((ability) => (
        <>
          <View style={styles.AbilityNameWrapper}>
            <Text style={styles.AbilityName}>{abilityName}</Text>
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
              {abilityDescription.map((a) => a)}
            </Text>
          </View>
        </>
      ))}
    </View>
  );
}
