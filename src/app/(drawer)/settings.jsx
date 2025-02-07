import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";

const Index = () => {
  const router = useRouter();
  const goHome = () => {
    router.push("/");
  };
  return (
    <View>
      <Text>Pagina settings</Text>
      <Pressable onPress={goHome}>
        <Text>Go Home</Text>
      </Pressable>
    </View>
  );
};

export default Index;
