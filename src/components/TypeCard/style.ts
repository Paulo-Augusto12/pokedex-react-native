import { StyleSheet } from "react-native";
import { useTheme } from "../../hook/useTheme";

const theme = useTheme();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    gap: 12,
  },
  typeNameWrapper: {
    width: "100%",
    textAlign: "left",
  },
  typeName: {
    color: theme.colors.TITLE,
    fontSize: 20,
  },
  typeContainer: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
    marginTop: 15,
  },
  typeDescription: {
    fontSize: 20,
    fontWeight: "600",
  },
});
