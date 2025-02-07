import { useEffect, useState } from "react";
import { View } from "react-native";
import { getAgents } from "../../../services/getAgents";
import { CarouselCard } from "../../../components/CarouselCard";

export default function Index() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    getAgents().then(({ data }) => {
      setAgents(data);
    });
  }, []);

  return (
    <View>
      <CarouselCard data={agents} />
      {/* <TouchableHighlight
        onPress={() => {}}
        style={{
          width: 100,
          height: 20,
          backgroundColor: "red",
          borderRadius: 10,
          justifyContent: "center",
        }}>
        <Text style={{ color: "black" }}>Ver mas</Text>
      </TouchableHighlight>
      <Button>Boton nativo</Button> */}
    </View>
  );
}
