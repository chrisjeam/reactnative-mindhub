import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { Paragraph } from "../../components/Paragraph";

export default function About() {
  const router = useRouter();
  const goHome = () => {
    router.push("/");
  };

  return (
    <View style={{ padding: 15 }}>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
        necessitatibus deserunt corrupti illo doloremque debitis nulla eum eos
        nisi cupiditate. Modi velit ducimus eligendi iure hic debitis
        necessitatibus culpa voluptatibus!
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
        necessitatibus deserunt corrupti illo doloremque debitis nulla eum eos
        nisi cupiditate. Modi velit ducimus eligendi iure hic debitis
        necessitatibus culpa voluptatibus!
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
        necessitatibus deserunt corrupti illo doloremque debitis nulla eum eos
        nisi cupiditate. Modi velit ducimus eligendi iure hic debitis
        necessitatibus culpa voluptatibus!
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
        necessitatibus deserunt corrupti illo doloremque debitis nulla eum eos
        nisi cupiditate. Modi velit ducimus eligendi iure hic debitis
        necessitatibus culpa voluptatibus!
      </Paragraph>
      <Paragraph>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
        necessitatibus deserunt corrupti illo doloremque debitis nulla eum eos
        nisi cupiditate. Modi velit ducimus eligendi iure hic debitis
        necessitatibus culpa voluptatibus!
      </Paragraph>

      <View style={{ textAlign: "center", flex: 1, alignItems: "center" }}>
        <Pressable
          onPress={goHome}
          style={({ pressed }) => [
            {
              marginTop: 20,
              width: 100,
              height: 40,
              padding: 5,
              backgroundColor: pressed ? "gray" : "#0a141e",
              borderRadius: 10,
              justifyContent: "center",
              cursor: "pointer",
            },
          ]}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Inicio</Text>
        </Pressable>
      </View>
    </View>
  );
}
