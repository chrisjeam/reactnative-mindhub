import { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import ScreenView from "../../../../components/ScreenView";
import { getAgents } from "../../../../services/getAgents";

export default function DetailAgent() {
  const { detail } = useLocalSearchParams();

  const [agents, setAgents] = useState([]);
  const agent = agents.find((agent) => agent.uuid === detail) ?? {};
  useEffect(() => {
    getAgents().then(({ data }) => {
      setAgents(data);
    });
  }, []);

  return (
    <ScreenView style={styles.container}>
      <Stack.Screen
        options={{
          headerStyle: {
            backgroundColor: "#f2536a",
          },
          headerTintColor: "black",
          headerLeft: () => {},
          headerRight: () => {},
          headerTitle: "Detalle del agente",
        }}
      />
      {agent ? (
        <View style={{ alignContent: "center", alignItems: "center" }}>
          <Text style={{ fontWeight: "bold", fontSize: 24 }}>
            {agent.displayName}
          </Text>
          <Image
            source={{ uri: agent.displayIconSmall }}
            style={{ width: 300, height: 300, marginTop: 12, marginBottom: 12 }}
            resizeMode="contain"
          />
          <Text>{agent.description}</Text>
          <Text>Role: {agent.role?.displayName}</Text>
          <Text>Desarrollador: {agent.developerName}</Text>
          <Text>Release Date: {agent.releaseDate}</Text>
        </View>
      ) : (
        <ActivityIndicator />
      )}
    </ScreenView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  backButton: {
    width: 100,
    padding: 5,
  },
});
