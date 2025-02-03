import { Link, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const index = () => {
  const { slug } = useLocalSearchParams();
  return (
    <View>
      <Text>Pagina settings</Text>
      <Text>Slug: {slug}</Text>
      <Link href={"about"}>Go to about</Link>
    </View>
  );
};

export default index;
