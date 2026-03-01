import QsafeView from "../../components/safeView";
import { Text, View, Image, Pressable } from "react-native";
import { router } from "expo-router";

const Verification = () => {
  return (
    <QsafeView>
      <View style={{ marginTop: 40, flexDirection: "flex-start" }}>
        <Text
          style={{
            fontFamily: "bold",
            color: "#004EA3",
            fontSize: 40,
            lineHeight: 58,
          }}
        >
          Welcome to
          <Text
            style={{
              color: "#FFC107",
              fontFamily: "bold",

              fontSize: 40,
            }}
          >
            {" "}
            Quick
          </Text>
          <Text>Ship!</Text>
        </Text>
      </View>

      <View style={{ marginTop: 40 }}>
        <Text
          style={{
            fontFamily: "medium",
            color: "#999999",
            fontSize: 14,
            lineHeight: 20,
          }}
        >
          {`We're`} glad to have you on board. Your ID verification is in
          progress and you can check the status in the profile section of the
          app.
        </Text>
      </View>

      <View>
        <Image
          source={require("../../assets/images/verification.png")}
          style={{
            width: 457,
            height: 450,
            alignSelf: "center",
            marginTop: 20,
          }}
        />
      </View>

      <Image
        source={require("../../assets/images/blur.png")}
        style={{
          position: "absolute",
          bottom: 0,
          width: 427,
          height: 250,
        }}
      />

      <Pressable
        style={{
          backgroundColor: "#004EA3",
          padding: 12,
          borderRadius: 8,
          marginTop: 70,
        }}
        onPress={() => {
          router.push("../onboardScreen");
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
          CONTINUE
        </Text>
      </Pressable>
    </QsafeView>
  );
};

export default Verification;
