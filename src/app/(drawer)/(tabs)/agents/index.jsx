import { View } from "react-native";
import { useEffect, useState } from "react";
import { getAgents } from "../../../../services/getAgents";
import { ScrollView } from "react-native-gesture-handler";
import { AgentCard } from "../../../../components/AgentCard";

export default function Agents() {
  const [agents, setAgents] = useState([]);

  useEffect(() => {
    getAgents().then(({ data }) => {
      setAgents(data);
    });
  }, []);

  return (
    <View style={{ padding: 10 }}>
      {/* {agents.length === 0 ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          style={{ padding: 10 }}
          data={agents}
          keyExtractor={(agent) => agent.uuid}
          renderItem={(agent) => <AgentCard agent={agent} />}
        />
      )} */}
      <ScrollView>
        {agents.map((agent) => (
          <AgentCard key={agent.uuid} agent={agent} />
        ))}
      </ScrollView>
    </View>
  );
}
