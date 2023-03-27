import { StyleSheet } from "react-native";
import { useTheme } from "../../hook/useTheme";

const theme = useTheme();
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.BACKGROUND,
    paddingHorizontal: 18,
  },

  initialText: {},
});
