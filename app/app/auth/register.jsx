import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  Pressable,
  Image,
  Alert,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { router } from "expo-router";
import { useState } from "react";
import { supabase } from "../../lib/supabase";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);

  async function signUpWithEmail() {
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });
    setLoading(false);
    if (error) {
      Alert.alert("Registration Failed", error.message);
      return;
    }

    Alert.alert(
      "Registration Successful",
      "Please check your email to verify your account, then log in.",
      [{ text: "OK", onPress: () => router.push("/auth/login") }],
    );
  }

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
            Join
          </Text>
          <Text style={{ color: "black", fontFamily: "bold", fontSize: 36 }}>
            Our Team!
          </Text>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text
            style={{ color: "#7D7D7D", fontFamily: "medium", fontSize: 13 }}
          >
            Create an account to start managing your deliveries efficiently.
            Enjoy optimized routes, real-time updates, and seamless delivery
            management.
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 12,
            marginTop: 20,
          }}
        >
          <TextInput
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: "#D0D0D0",
              borderRadius: 8,
              paddingHorizontal: 12,
              paddingVertical: 10,
              fontSize: 14,
              backgroundColor: "#FFFFFF",
            }}
            placeholder="First Name"
            placeholderTextColor="#B0B0B0"
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
          />
          <TextInput
            style={{
              flex: 1,
              borderWidth: 1,
              borderColor: "#D0D0D0",
              borderRadius: 8,
              paddingHorizontal: 12,
              paddingVertical: 10,
              fontSize: 14,
              backgroundColor: "#FFFFFF",
            }}
            placeholder="Last Name"
            placeholderTextColor="#B0B0B0"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />
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
            placeholderTextColor="#B0B0B0"
            value={email}
            onChangeText={(text) => setEmail(text)}
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
            placeholder="Enter password"
            placeholderTextColor="#B0B0B0"
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={(text) => setPassword(text)}
            style={{
              flex: 1,
              padding: 10,
              color: "black",
              fontWeight: "bold",
              fontSize: 14,
            }}
          />
          <Pressable onPress={() => setShowPassword(!showPassword)}>
            <AntDesign
              name={showPassword ? "eye-invisible" : "eye"}
              size={18}
              color="black"
            />
          </Pressable>
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
            placeholder="Confirm password"
            placeholderTextColor="#B0B0B0"
            secureTextEntry={!showPassword1}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            style={{
              flex: 1,
              padding: 10,
              color: "black",
              fontWeight: "bold",
              fontSize: 14,
            }}
          />
          <Pressable onPress={() => setShowPassword1(!showPassword1)}>
            <AntDesign
              name={showPassword1 ? "eye-invisible" : "eye"}
              size={18}
              color="black"
            />
          </Pressable>
        </View>

        <View style={{ marginTop: 40, height: 40 }}>
          <Pressable
            onPress={signUpWithEmail}
            disabled={loading}
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
              CONTINUE
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
            flexDirection: "row",
          }}
        >
          <Text style={{ color: "black", fontFamily: "medium", fontSize: 16 }}>
            Already have an account?{" "}
          </Text>
          <Pressable
            onPress={() => {
              router.push("/auth/login");
            }}
          >
            <Text style={{ color: "#004EA3", fontFamily: "bold" }}>Log In</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default Register;
