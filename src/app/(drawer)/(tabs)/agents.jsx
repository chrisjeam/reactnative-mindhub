import { Link, useLocalSearchParams } from "expo-router";
import { Text } from "react-native";

const index = () => {
  const { slug } = useLocalSearchParams();
  return (
    <View>
      <Text>Pagina agents</Text>
      <Text>Slug: {slug}</Text>
      <Link href={"about"}>Go to about</Link>
    </View>
  );
};

export default index;
