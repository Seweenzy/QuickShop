import QsafeView from "../../../components/safeView";
import { View, Text, Pressable, TextInput, Image, Alert } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";

const PhoneChanged = () => {
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
        <Text style={{ fontFamily: "bold", fontSize: 18 }}>
          {" "}
          Change Phone Number
        </Text>
        <Text style={{ color: "#7E7E7E", fontFamily: "normal", marginTop: 5 }}>
          You can change your phone number here to keep your account secure.
        </Text>
        <View style={{ marginTop: 20 }}>
          <Text>Current Phone Number</Text>

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
            <Feather name="phone" size={24} color="#004EA3" />
            <TextInput
              placeholder="9008764747"
              secureTextEntry={true}
              style={{
                flex: 1,
                padding: 10,
                marginLeft: 10,
                fontSize: 16,
                fontWeight: "normal",
              }}
            />
            <AntDesign name="eye-invisible" size={18} color="black" />
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text>Confirm New Phone Number:</Text>
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
          <Feather name="phone" size={24} color="#004EA3" />
          <TextInput
            placeholder="9008764747"
            secureTextEntry={true}
            style={{
              flex: 1,
              padding: 10,
              color: "black",
              fontWeight: "normal",
              fontSize: 16,
            }}
          />
          <AntDesign name="eye-invisible" size={18} color="black" />
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 20 }}>
        <Pressable
          onPress={() =>
            Alert.alert(
              "Phone Number Updated",
              "Your phone number has been updated successfully.",
              [
                {
                  text: "OK",
                  onPress: () => router.push("/(tabs)/profile"),
                },
              ],
            )
          }
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

export default PhoneChanged;
