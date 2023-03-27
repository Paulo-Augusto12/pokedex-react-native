import { StyleSheet } from "react-native";
import { useTheme } from "../../hook/useTheme";

const theme = useTheme();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
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
    fontWeight: "bold",
    textAlign: "center",
  },

  pokemonImageContainer: {
    width: "100%",
    padding: 36,
    justifyContent: "center",
    borderBottomLeftRadius: 186,
    alignItems: "center",
  },
  pokemonImage: {
    width: 240,
    height: 252,
    overflow: "hidden",
  },

  actionMenu: {
    marginTop: 51,
    alignSelf: "center",
  },
});
