import { Pressable, StyleSheet, Text, View } from "react-native";
import { Link, useLocalSearchParams } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function DetailAgent() {
  const { detail } = useLocalSearchParams();
  return (
    <View style={styles.container}>
      <Link asChild href="/">
        <Pressable style={styles.backButton}>
          <AntDesign name="home" size={24} color="black" />
        </Pressable>
      </Link>
      <Text style={styles.title}>Detalle del agente {detail}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  backButton: {
    width: 100,
    padding: 5,
  },
});
