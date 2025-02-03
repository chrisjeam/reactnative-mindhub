import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import Ionicons from "react-native-vector-icons/Ionicons";

const layout = () => {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen name="agents" options={{ title: "Agentes" }} />
      <StatusBar style="auto" />
    </Tabs>
  );
};

export default layout;
