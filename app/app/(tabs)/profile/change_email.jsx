import QsafeView from "../../../components/safeView";
import { Text, Image, View, TextInput, Pressable } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";

const ChangeEmail = () => {
  return (
    <QsafeView>
      <Image
        source={require("../../../assets/images/QsLogo.png")}
        style={{ width: 94, height: 32, alignSelf: "center" }}
      />
      <View
        style={{
          backgroundColor: "white",
          borderRadius: 10,
          marginTop: 40,
          padding: 20,
          marginHorizontal: 20,
        }}
      >
        <Text style={{ fontFamily: "bold", fontSize: 18 }}> Email Address</Text>
        <Text style={{ color: "#7E7E7E", fontFamily: "normal", marginTop: 5 }}>
          You can change your email address here to ensure you receive all
          important notifications.
        </Text>
        <View style={{ marginTop: 20 }}>
          <Text>Current Email Address</Text>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              borderWidth: 1,
              borderColor: "#ccc",
              borderRadius: 5,
              paddingHorizontal: 10,
              marginTop: 10,
            }}
          >
            <FontAwesome name="envelope-o" size={24} color="black" />
            <TextInput
              placeholder="geloval@gmail.com"
              style={{
                flex: 1,
                padding: 10,
                marginLeft: 10,
              }}
            />
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text>New Email Address:</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 5,
            paddingHorizontal: 10,
            marginTop: 10,
            gap: 10,
          }}
        >
          <FontAwesome name="envelope-o" size={24} color="black" />
          <TextInput
            placeholder="koluwaseunemmanuel@gmail.com"
            style={{
              flex: 1,
              padding: 10,
              color: "black",
              fontWeight: "500",
            }}
          />
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 20 }}>
        <Pressable
          onPress={() => {
            router.push("/(tabs)/profile/emailchanged");
          }}
          style={{
            backgroundColor: "#004ea3",
            padding: 10,
            borderRadius: 10,
            position: "relative",
            alignItems: "center",
            justifyContent: "center",
            marginHorizontal: 20,
          }}
        >
          <Text style={{ color: "white", fontFamily: "medium", fontSize: 18 }}>
            SAVE CHANGES
          </Text>
        </Pressable>
      </View>
    </QsafeView>
  );
};

export default ChangeEmail;
