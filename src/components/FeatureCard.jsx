import { StyleSheet, Text, View } from "react-native";

export default function FeatureCard({ title, content, image }) {
  return (
    <View style={styles.container}>
      {image && image}
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.paragraph}>{content}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 10,
    padding: 10,
    alignContent: "center",
    alignItems: "center",
    height: 250,
    marginBottom: 20,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 18,
  },
  paragraph: { color: "black", fontSize: 18 },
});
