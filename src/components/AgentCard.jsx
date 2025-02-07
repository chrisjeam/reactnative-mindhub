import { Link } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

export const AgentCard = ({ agent }) => {
  return (
    <Link href={`/agents/${agent.uuid}`} asChild>
      <Pressable
        style={(pressable) =>
          pressable
            ? {
                borderColor: "rgb(12, 23, 34)",
                borderStyle: "solid",
                borderWidth: 1,
                backgroundColor: "rgb(12, 23, 34)",
              }
            : {}
        }
      >
        <View
          style={{
            padding: 12,
            backgroundColor: "rgb(12, 23, 34)",
            marginBottom: 10,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 18, color: "white" }}>
            {agent.displayName}
          </Text>
          <Image
            source={{ uri: agent.displayIconSmall }}
            style={{ width: 100, height: 100, marginTop: 12 }}
            resizeMode="contain"
          />
          <Text style={{ marginTop: 12, marginBottom: 12, color: "white" }}>
            {agent.description}
          </Text>
          <Text style={{ color: "white" }}>{agent.role?.displayName}</Text>
        </View>
      </Pressable>
    </Link>
  );
};
