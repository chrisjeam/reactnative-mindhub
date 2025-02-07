import { Image } from "react-native";
import { Text, View } from "react-native";

export const CarouselCard = ({ item, ...props }) => {
  return (
    <View style={{ alignContent: "center", alignItems: "center" }} {...props}>
      <Image
        source={{ uri: item.displayIconSmall }}
        style={{ width: 200, height: 200 }}
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
};
