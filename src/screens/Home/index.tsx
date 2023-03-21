import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>
          Check out some information about your favorites pocket monsters
        </Text>
      </View>
    </View>
  );
}
