import { StyleSheet } from "react-native";
import { useTheme } from "../../hook/useTheme";

const theme = useTheme();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 0,
  },

  header: {
    paddingTop: 40,
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
    borderBottomLeftRadius: 150,
    alignItems: "center",
  },
  pokemonImage: {
    width: 240,
    height: 252,
    overflow: "hidden",
  },

  flavorText: {
    paddingHorizontal: 18,
    marginTop: 40,
  },

  description: {
    fontWeight: '600',
    color: theme.colors.SUBTITLE
  },

  actionMenu: {
    marginTop: 51,
    alignSelf: "center",
  },
});
