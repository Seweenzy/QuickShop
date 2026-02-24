import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import QsafeView from "../../components/safeView";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";

const PasswordConfirmation = () => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView
        style={{ flex: 1, backgroundColor: "#F8F9FA", paddingHorizontal: 15 }}
      >
        <View style={{ marginTop: 40 }}>
          <Text
            style={{
              color: "#004EA3",
              fontFamily: "bold",
              fontSize: 36,
              lineHeight: 40,
            }}
          >
            Almost
          </Text>
          <Text style={{ color: "black", fontFamily: "bold", fontSize: 36 }}>
            There!
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{ color: "#7D7D7D", fontFamily: "medium", fontSize: 13 }}
          >
            Enter your new password below and secure your account. {`You're`} on
            your way to a stronger, safer login!
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: "black", fontFamily: "medium", fontSize: 14 }}>
            New Password
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 5,
            paddingHorizontal: 10,
            marginTop: 2,
            gap: 10,
            backgroundColor: "white",
          }}
        >
          <Feather name="lock" size={18} color="black" />
          <TextInput
            placeholder="Confirm new password"
            placeholderTextColor="#B0B0B0"
            secureTextEntry={true}
            style={{
              flex: 1,
              padding: 10,
              color: "black",
              fontWeight: "bold",
              fontSize: 14,
            }}
          />
          <AntDesign name="eye-invisible" size={18} color="black" />
        </View>{" "}
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: "black", fontFamily: "medium", fontSize: 14 }}>
            Confirm New Password
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderWidth: 1,
            borderColor: "#ccc",
            borderRadius: 5,
            paddingHorizontal: 10,
            marginTop: 2,
            gap: 10,
            backgroundColor: "white",
          }}
        >
          <Feather name="lock" size={18} color="black" />
          <TextInput
            placeholder="Confirm new password"
            placeholderTextColor="#B0B0B0"
            secureTextEntry={true}
            style={{
              flex: 1,
              padding: 10,
              color: "black",
              fontWeight: "bold",
              fontSize: 14,
            }}
          />
          <AntDesign name="eye-invisible" size={18} color="black" />
        </View>
        <View style={{ marginTop: 60, height: 40 }}>
          <Pressable
            onPress={() => {
              router.push("/auth/login");
            }}
            style={{
              backgroundColor: "#004ea3",
              padding: 10,
              borderRadius: 10,
              position: "relative",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ color: "white", fontFamily: "medium", fontSize: 16 }}
            >
              SUBMIT
            </Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default PasswordConfirmation;
