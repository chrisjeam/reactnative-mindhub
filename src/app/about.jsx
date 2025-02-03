import { Link, useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

export default function About() {
  const router = useRouter();
  const goHome = () => {
    router.push("/");
  };

  return (
    <View>
      <Text>About page</Text>
      <Pressable onPress={goHome}>
        <Text>Go Home</Text>
      </Pressable>
    </View>
  );
}
