import { Image } from "react-native";
import { Dimensions, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";

export const CarouselCard = ({ data }) => {
  const width = Dimensions.get("window").width;

  const Card = ({ item }) => (
    <View>
      <Image
        source={{ uri: item.displayIconSmall }}
        style={{ width: 400, height: 400 }}
        resizeMode="contain"
      />
      <View
        style={{
          backgroundColor: "#0a141e",
          alignItems: "center",
          padding: 10,
        }}
      >
        <Text
          style={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          {item.displayName}
        </Text>
      </View>
    </View>
  );
  return (
    <Carousel
      loop
      autoPlay
      width={width}
      height={width + 40}
      data={data}
      renderItem={({ item }) => <Card item={item} />}
      scrollAnimationDuration={1000}
    />
  );
};
