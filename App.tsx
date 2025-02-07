import { StyleSheet, View } from "react-native";
import { Slot } from "expo-router";

// Import your global CSS file
import "./global.css";

export default function App() {
  return (
    <View style={styles.container}>
      <Slot />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
});
