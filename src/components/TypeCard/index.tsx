import {
  FlatList,
  View,
  Text,
  ColorValue,
  TouchableOpacity,
} from "react-native";
import { styles } from "./style";
import { IPokemonType } from "../../screens/About_Pokemon/useAbout_Pokemon";
import { Info, Repeat } from "phosphor-react-native";

interface ITypeCardProps {
  pokemonTypes: IPokemonType[];
  descriptionTextColor: ColorValue;
  containerBackgroundColor: ColorValue;
}

export function TypeCard({
  pokemonTypes,
  descriptionTextColor,
  containerBackgroundColor,
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
              <View style={styles.descriptionElementsWrapper}>
                <TouchableOpacity>
                  <Text
                    style={[
                      styles.typeDescription,
                      { color: descriptionTextColor },
                    ]}
                  >
                    Check out some other pokemons that are from {item.name} type
                  </Text>
                </TouchableOpacity>
                <Info size={32} color={descriptionTextColor as string} />
              </View>
              <View style={styles.descriptionElementsWrapper}>
                <TouchableOpacity>
                  <Text
                    style={[
                      styles.typeDescription,
                      { color: descriptionTextColor },
                    ]}
                  >
                    Check out the damage relation of the {item.name} type
                  </Text>
                </TouchableOpacity>
                <Repeat size={32} color={descriptionTextColor as string} />
              </View>
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
