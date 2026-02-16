import QsafeView from "../components/safeView";
import { Text, View, Image, Pressable } from "react-native";
import { router } from "expo-router";

const OnboardScreen = () => {
  return (
    <QsafeView>
      <View style={{ marginTop: 200 }}>
        <Text
          style={{
            fontFamily: "bold",
            color: "#004EA3",
            fontSize: 40,
            lineHeight: 48,
          }}
        >
          Streamline {`\n`}your deliveries!
        </Text>
      </View>

      <View style={{ marginTop: 20 }}>
        <Text
          style={{
            fontFamily: "medium",
            color: "#000",
            fontSize: 14,
            lineHeight: 20,
          }}
        >
          Easily manage and track your delivery tasks, optimize routes, and get
          real-time updates to ensure efficient and timely deliveries.
        </Text>
      </View>

      <View>
        <Image
          source={require("../assets/images/delivery.png")}
          style={{
            width: 427,
            height: 300,
            alignContent: "center",
            marginTop: 60,
          }}
        />
      </View>

      <Image
        source={require("../assets/images/blur.png")}
        style={{
          position: "absolute",
          bottom: 0,
          width: 427,
          height: 250,
        }}
      />

      <Pressable
        style={{
          backgroundColor: "#D9D9D9",
          padding: 12,
          borderRadius: 8,
          marginTop: 70,
        }}
        onPress={() => {
          router.push("./dashboard");
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            fontFamily: "medium",
            textAlign: "center",
          }}
        >
          GET STARTED
        </Text>
      </Pressable>
    </QsafeView>
  );
};

export default OnboardScreen;
