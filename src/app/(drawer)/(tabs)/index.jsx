import { useEffect, useState } from "react";
import { getAgents } from "../../../services/getAgents";
import { CarouselCard } from "../../../components/CarouselCard";
import { Pressable, ScrollView } from "react-native-gesture-handler";
import { StyleSheet, Text, View } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { Dimensions } from "react-native";
import { Link } from "expo-router";
import FeatureCard from "../../../components/FeatureCard";

export default function Index() {
  const [agents, setAgents] = useState([]);
  const width = Dimensions.get("window").width;

  useEffect(() => {
    getAgents().then(({ data }) => {
      setAgents(data);
    });
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={{ padding: 10 }}>
        <Text style={styles.h1}>Welcome to Valorant-API</Text>
        <Text style={styles.subTitle}>
          An extensive API containing data of most in-game items, assets and
          more!
        </Text>
        <Link asChild href={"/about"}>
          <Pressable
            style={{
              marginTop: 10,
              width: 100,
              borderColor: "white",
              borderStyle: "solid",
              borderWidth: 2,
              borderRadius: 10,
              padding: 10,
            }}
          >
            <Text
              style={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              Leer mas
            </Text>
          </Pressable>
        </Link>

        <Carousel
          loop
          autoPlay
          width={width}
          height={300}
          data={agents}
          renderItem={({ item }) => <CarouselCard item={item} />}
          scrollAnimationDuration={1000}
        />
        <Text style={styles.h2}>Features</Text>
        <Text style={styles.subTitle}>
          Check out our Dashboard for a full documentation of all our API
          endpoints.
        </Text>
      </View>
      <View style={styles.features}>
        <FeatureCard
          title="Agents"
          content="Data and assets of all agents and their abilities"
        />
        <FeatureCard
          title="Buddies"
          content="Data and assets of all gamemodes"
        />
        <FeatureCard
          title="Cards"
          content="Data and assets of all playable maps"
        />
        <FeatureCard title="Currencies" content="Data of all seasons" />
      </View>
      <View style={styles.footer}>
        <Text style={{ color: "white" }}>
          © Copyright Valorant-API. All Rights Reserved
        </Text>
        <Text style={{ color: "white" }}>
          Valorant-API is a non-official API and not endorsed by Riot Games in
          any way. Riot Games, Valorant, and all associated properties are
          trademarks or registered trademarks of Riot Games, Inc.
        </Text>
      </View>

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
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 15,
    backgroundColor: "#dc4555",
  },
  h1: {
    fontSize: 35,
    color: "white",
    fontWeight: "bold",
  },
  h2: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
    marginBottom: 10,
  },
  subTitle: {
    color: "white",
  },
  footer: {
    marginTop: 20,
    marginBottom: 10,
    paddingTop: 10,
    paddingHorizontal: 10,
    paddingBottom: 20,
    backgroundColor: "#492e38",
    alignContent: "center",
  },
  features: {
    padding: 20,
  },
});
