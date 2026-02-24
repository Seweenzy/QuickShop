import { View, Text, Image, Pressable, ScrollView } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";
import QsafeView from "../../../components/safeView";

const Profile = () => {
  return (
    <ScrollView>
      <QsafeView>
        <View>
          <Image
            source={require("../../../assets/images/QsLogo.png")}
            style={{ width: 94, height: 32, alignSelf: "center" }}
          />
        </View>

        <View>
          <Image
            source={require("../../../assets/images/profile.png")}
            style={{
              width: 100,
              height: 100,
              alignSelf: "center",
              marginTop: 40,
            }}
          />
        </View>

        <View style={{ marginTop: 10, alignSelf: "center" }}>
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            Angelo Valdez
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            flexDirection: "row",
            gap: 5,
            alignSelf: "center",
          }}
        >
          <Text
            style={{ color: "#7D7D7D", fontFamily: "medium", fontSize: 16 }}
          >
            09861321754
          </Text>
          <Text style={{ color: "gray", fontFamily: "bold" }}>.</Text>
          <Text
            style={{ color: "#7D7D7D", fontFamily: "medium", fontSize: 16 }}
          >
            geloval20@gmail.com
          </Text>
        </View>

        <View
          style={{
            borderRadius: 20,
            backgroundColor: "white",

            marginHorizontal: 20,
            marginVertical: 20,
            padding: 20,
          }}
        >
          <Text style={{ fontFamily: "bold", fontSize: 24 }}>Settings</Text>
          <Text
            style={{ color: "#7D7D7D", fontFamily: "normal", fontSize: 14 }}
          >
            Update yoour personal information and credentials
          </Text>
          <Pressable
            onPress={() => {
              router.push("/(tabs)/profile/change_email");
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              <View style={{ flexDirection: "row", gap: 10 }}>
                <View
                  style={{
                    width: 50,
                    borderRadius: 25,
                    backgroundColor: "#DFEEFF",
                    padding: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 2,
                    borderColor: "#DFEEFF",
                  }}
                >
                  <FontAwesome name="envelope-o" size={24} color="#004EA3" />
                </View>
                <Text
                  style={{
                    fontFamily: "bold",
                    fontSize: 18,
                    alignSelf: "center",
                  }}
                >
                  Change Email
                </Text>
              </View>
              <View style={{ alignSelf: "center" }}>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={24}
                  color="black"
                />
              </View>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              router.push("/(tabs)/profile/change_password");
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
                marginBottom: 20,
              }}
            >
              <View style={{ flexDirection: "row", gap: 10 }}>
                <View
                  style={{
                    width: 50,
                    borderRadius: 25,
                    backgroundColor: "#DFEEFF",
                    padding: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 2,
                    borderColor: "#DFEEFF",
                  }}
                >
                  <FontAwesome name="lock" size={24} color="#004EA3" />
                </View>
                <Text
                  style={{
                    fontFamily: "bold",
                    fontSize: 18,
                    alignSelf: "center",
                  }}
                >
                  Change Password
                </Text>
              </View>
              <View style={{ alignSelf: "center" }}>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={24}
                  color="black"
                />
              </View>
            </View>
          </Pressable>
          <Pressable
            onPress={() => {
              router.push("/(tabs)/profile/change_phone");
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: 20,
              }}
            >
              <View style={{ flexDirection: "row", gap: 10 }}>
                <View
                  style={{
                    width: 50,
                    borderRadius: 25,
                    backgroundColor: "#DFEEFF",
                    padding: 10,
                    alignItems: "center",
                    justifyContent: "center",
                    borderWidth: 2,
                    borderColor: "#DFEEFF",
                  }}
                >
                  <Feather name="phone" size={24} color="#004EA3" />
                </View>
                <Text
                  style={{
                    fontFamily: "bold",
                    fontSize: 18,
                    alignSelf: "center",
                  }}
                >
                  Change Phone Number
                </Text>
              </View>
              <View style={{ alignSelf: "center" }}>
                <MaterialIcons
                  name="arrow-forward-ios"
                  size={24}
                  color="black"
                />
              </View>
            </View>
          </Pressable>
        </View>

        <View
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            padding: 20,
            marginHorizontal: 20,
          }}
        >
          <Text style={{ fontFamily: "bold", fontSize: 24 }}>
            Verification Status
          </Text>
          <Text
            style={{ color: "#9B9B9B", fontFamily: "normal", fontSize: 14 }}
          >
            You can view the current status of your ID verification here.
          </Text>

          <Pressable
            style={{
              backgroundColor: "#E1E1E1",
              padding: 10,
              borderRadius: 5,
              marginTop: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{ color: "#606060", fontFamily: "bold", fontSize: 18 }}
            >
              Under Review
            </Text>
          </Pressable>
        </View>

        <Pressable
          style={{
            backgroundColor: "#004ea3",
            padding: 10,
            borderRadius: 10,
            marginTop: 40,
            alignItems: "center",
            justifyContent: "center",
            marginHorizontal: 20,
          }}
        >
          <Text style={{ color: "white", fontFamily: "medium", fontSize: 18 }}>
            LOG OUT
          </Text>
        </Pressable>
      </QsafeView>
    </ScrollView>
  );
};

export default Profile;
