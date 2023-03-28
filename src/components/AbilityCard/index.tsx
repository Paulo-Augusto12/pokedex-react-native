import React from "react";
import { View, Text, ColorValue } from "react-native";
import { styles } from "./style";

interface IAbilitiesCardProps {
  abilityName: string;
  abilityDescription: string;
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
    <View style={styles.container}>
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
          style={[styles.abilityDescription, { color: descriptionTextColor }]}
        >
          {abilityDescription.toLowerCase()}
        </Text>
      </View>
    </View>
  );
}
