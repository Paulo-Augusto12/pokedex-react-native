import { StyleSheet } from "react-native";
import { useTheme } from "../../hook/useTheme";

const theme = useTheme();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9ECEF",
    paddingHorizontal: 18,
  },

  hederContainer: {
    gap: 67,
  },

  header: {
    paddingTop: 70,
    gap: 6,
  },

  headerTitle: {
    fontSize: theme.fontSize.large,
    fontWeight: "bold",
    color: theme.colors.TITLE,
  },

  headerDescription: {
    fontWeight: "600",
    color: theme.colors.SUBTITLE,
    fontSize: theme.fontSize.default,
  },

  searchBarContainer: {
    flexDirection: "row",
    gap: 20,
  },

  searchBar: {
    backgroundColor: theme.colors.LIGHT_GRAY,
    padding: 6,
    borderRadius: 10,
    flex: 1,
  },

  searchActions: {
    flexDirection: "row",
    gap: 12,
  },

  filterButton: {
    width: 37,
    height: 37,
    borderRadius: 10,
    backgroundColor: theme.colors.HARD_GRAY,
    justifyContent: "center",
    alignItems: "center",
  },

  pokemonListWrapper: {
    marginTop: 67,
  },
});
