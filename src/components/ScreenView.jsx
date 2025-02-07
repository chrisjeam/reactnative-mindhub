import { View } from "react-native";

export default function ScreenView({ children }) {
  return <View style={{ padding: 10 }}>{children}</View>;
}
