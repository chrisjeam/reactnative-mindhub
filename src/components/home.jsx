import { useEffect, useState } from "react";
import { View, Text, Dimensions, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { getAgents } from "../services/getAgents";

export default () => {
  const [agents, setAgents] = useState([]);
  const width = Dimensions.get("window").width;

  const Card = ({ item }) => (
    <View>
      <Text>{item.displayName}</Text>
      <Image
        source={{ uri: item.displayIconSmall }}
        style={{ width: 400, height: 400 }}
        resizeMode="contain"
      />
    </View>
  );

  useEffect(() => {
    getAgents().then(({ data }) => {
      setAgents(data);
    });
  }, []);

  return (
    <View>
      <Text>Aplicacion funcionando!</Text>
      <Carousel
        loop
        autoPlay
        width={width}
        height={width}
        data={[...agents]}
        renderItem={({ item }) => <Card item={item} />}
        scrollAnimationDuration={1000}
      />
    </View>
  );
};
