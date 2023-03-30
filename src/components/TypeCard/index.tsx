import { FlatList, View, Text, ColorValue } from "react-native";
import { styles } from "./style";
import { IPokemonType } from "../../screens/About_Pokemon/useAbout_Pokemon";

interface ITypeCardProps {
  pokemonTypes: IPokemonType[];
  containerBackgroundColor: ColorValue;
  descriptionTextColor: ColorValue;
}

export function TypeCard({
  pokemonTypes,
  containerBackgroundColor,
  descriptionTextColor,
}: ITypeCardProps) {
  return (
    <View style={styles.container}>


        <FlatList
          data={pokemonTypes}
          renderItem={({ item }) => (
            <>
              <View style={styles.typeNameWrapper}>
                <Text style={styles.typeName}>
                  {item.name[0].toUpperCase() + item.name.substring(1)}
                </Text>
              </View>
    
              <View
                style={[
                  styles.typeContainer,
                  { backgroundColor: containerBackgroundColor },
                ]}
              >
                <Text
                  style={[styles.typeDescription, { color: descriptionTextColor }]}
                >
                  {/* {item.effect} */}
                </Text>
              </View>
            </>
          )}
          ItemSeparatorComponent={() => (
            <View style={{ padding: 10, paddingBottom: 10 }} />
          )}
          showsVerticalScrollIndicator={false}
        />
    </View>
  );
}
