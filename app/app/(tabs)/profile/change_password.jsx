import QsafeView from "../../../components/safeView";
import { View, Text, Pressable, TextInput, Image } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import AntDesign from "@expo/vector-icons/AntDesign";

const ChangePassword = () => {
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
          Change Password
        </Text>
        <Text style={{ color: "#7E7E7E", fontFamily: "normal", marginTop: 5 }}>
          You can change your password here to keep your account secure.
        </Text>
        <View style={{ marginTop: 20 }}>
          <Text>New Password</Text>

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
            <FontAwesome name="lock" size={18} color="black" />
            <TextInput
              placeholder="Enter new password"
              secureTextEntry={true}
              style={{
                flex: 1,
                padding: 10,
                marginLeft: 10,
              }}
            />
            <AntDesign name="eye-invisible" size={18} color="black" />
          </View>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text>Confirm New Password:</Text>
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
          <FontAwesome name="lock" size={18} color="black" />
          <TextInput
            placeholder="Confirm new password"
            secureTextEntry={true}
            style={{
              flex: 1,
              padding: 10,
              color: "black",
              fontWeight: "500",
            }}
          />
          <AntDesign name="eye-invisible" size={18} color="black" />
        </View>
      </View>

      <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 20 }}>
        <Pressable
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

export default ChangePassword;
