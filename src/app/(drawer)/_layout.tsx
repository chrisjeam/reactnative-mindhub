import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen name="(tabs)" options={{ title: "Inicio" }} />
        <Drawer.Screen name="about" options={{ title: "Configuracion" }} />
      </Drawer>
    </GestureHandlerRootView>
  );
};
