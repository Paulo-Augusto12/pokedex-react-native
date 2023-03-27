import React from "react";
import { View, Text, FlatList } from "react-native";
import { styles } from './style'

export function AboutPokemon() {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <View>About Pokemon</View>
    </View>
  );
}
