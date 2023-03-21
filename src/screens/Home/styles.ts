import { StyleSheet } from "react-native";
import { useTheme } from "../../hook/useTheme";

const theme = useTheme();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9ECEF",
    paddingHorizontal: 18,
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
    marginTop: 67,
    flexDirection: "row",
    gap: 20,
  },

  searchBar: {
    backgroundColor: theme.colors.LIGHT_GRAY,
    padding: 6,
    borderRadius: 10,
    width: "85%",
  },

  filterButton: {
    width: 37,
    height: 37,
    borderRadius: 10,
    backgroundColor: theme.colors.HARD_GRAY,
    justifyContent: "center",
    alignItems: "center",
  },
});
