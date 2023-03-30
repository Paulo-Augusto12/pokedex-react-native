import { StyleSheet } from "react-native";
import { useTheme } from "../../hook/useTheme";

const theme = useTheme();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 12,
  },
  AbilityNameWrapper: {
    width: "100%",
    textAlign: "left",
  },
  AbilityName: {
    color: theme.colors.TITLE,
    fontSize: 20,
  },
  abilityContainer: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
    marginTop: 15,
  },
  abilityDescription: {
    fontSize: 20,
    fontWeight: "600",
  },
});
