import { Stack } from "expo-router";

export default function layoutTabs() {
  return (
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen
        name="index"
        options={{
          title: "Inicio",
        }}
      />
      <Stack.Screen
        name="[detail]"
        options={{
          title: "Detalle",
        }}
      />
    </Stack>
  );
}
