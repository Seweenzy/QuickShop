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

const ForgotPassword = () => {
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
            {`Don't`} Worry!
          </Text>
          <Text style={{ color: "black", fontFamily: "bold", fontSize: 36 }}>
            Worry!
          </Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <Text
            style={{ color: "#7D7D7D", fontFamily: "medium", fontSize: 13 }}
          >
            Log in to manage your deliveries, track progress, and ensure timely
            arrivals. Your efficient delivery experience starts here.
          </Text>
        </View>
        <View style={{ marginTop: 40 }}>
          <Text style={{ color: "black", fontFamily: "medium", fontSize: 14 }}>
            Email Address
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
          <FontAwesome name="envelope-o" size={18} color="black" />
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

        <View style={{ marginTop: 20 }}>
          <Text style={{ color: "black", fontFamily: "medium", fontSize: 14 }}>
            Password
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

        <Text
          style={{
            color: "#004EA3",
            fontFamily: "bold",
            fontSize: 12,
            marginTop: 10,
            alignSelf: "flex-end",
          }}
        >
          Forgot Password?
        </Text>

        <View style={{ marginTop: 40, height: 40 }}>
          <Pressable
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
              LOG IN
            </Text>
          </Pressable>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginTop: 30,
            gap: 10,
          }}
        >
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "#ccc",
            }}
          />
          <Text style={{ alignSelf: "center", fontFamily: "medium" }}>Or</Text>
          <View
            style={{
              flex: 1,
              height: 1,
              backgroundColor: "#ccc",
            }}
          />
        </View>

        <View
          style={{
            marginTop: 30,
            height: 40,
            backgroundColor: "white",
            borderRadius: 5,
            borderColor: "#E1E1E1",
            borderWidth: 1,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Image
            source={require("../../assets/images/Google.png")}
            style={{ width: 20, height: 20 }}
          />
          <Text>Continue with Google</Text>
        </View>

        <View
          style={{
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "black", fontFamily: "medium", fontSize: 16 }}>
            Do not have an account?{" "}
            <Text style={{ color: "#004EA3", fontFamily: "medium" }}>
              Create an Account
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default ForgotPassword;
