import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";
import { Image, SafeAreaView, View } from "react-native";

export default function layoutDrawer() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView />
      <View style={{ backgroundColor: "#0a141e" }}>
        <Image
          source={{
            uri: "https://valorant-api.com/assets/img/logo_transparent.png?v=1",
          }}
          style={{ width: 100, height: 50, margin: 5 }}
          resizeMode="contain"
        />
      </View>
      <Drawer>
        <Drawer.Screen name="(tabs)" options={{ title: "Inicio" }} />
        <Drawer.Screen name="about" options={{ title: "Acerca de" }} />
        <Drawer.Screen name="settings" options={{ title: "Configuración" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
}
