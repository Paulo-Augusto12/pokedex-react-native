import { StyleSheet } from "react-native";
import { useTheme } from "../../hook/useTheme";

const theme = useTheme();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.BACKGROUND,
    paddingHorizontal: 18,
  },

  header: {
    paddingTop: 70,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    gap: 20,
  },
  initialDisplay: {
    flexDirection: "row",
    alignItems: "center",
  },

  pokemonName: {
    fontSize: theme.fontSize.large,
    fontWeight: "bold",
    textAlign: "center",
  },
  pokemonNationalNumber: {
    fontSize: theme.fontSize.nationalNumber,
    color: theme.colors.LIGHT_GRAY,
    fontWeight: "bold",
    textAlign: "center",
  },

  pokemonImageContainer: {
    width: 324,
    height: 357,
    marginTop: 60,
    backgroundColor: "#CFD4BA",
    alignSelf: "center",
    borderRadius: 10,
    padding: 6,
  },
  pokemonImage: {
    width: 312,
    height: 345,
  },

  actionMenu: {
    paddingTop: 41,
    alignSelf: "center",
  },
});
