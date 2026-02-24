import QsafeView from "../../components/safeView";
import {
  View,
  Text,
  Image,
  Pressable,
  Dimensions,
  ScrollView,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";

const ReportTables = () => {
  const { width } = Dimensions.get("screen");
  return (
    <QsafeView>
      <View style={{ flexDirection: "row", gap: 90 }}>
        <Pressable
          onPress={() => {
            router.back();
          }}
        >
          <Feather name="arrow-left" size={24} color="black" />
        </Pressable>

        <View style={{ position: "relative" }}>
          <Image
            source={require("../../assets/images/QsLogo.png")}
            style={{ width: 94, height: 32 }}
          />
        </View>
      </View>

      <View
        style={{
          backgroundColor: "white",

          marginTop: 30,
          borderRadius: 10,
          borderRadiusColor: "grey",
          borderWidth: 0.1,
          paddingVertical: 15,
          paddingHorizontal: 15,
        }}
      >
        <Text style={{ fontFamily: "bold", fontSize: 18 }}>
          Enter Date Range
        </Text>
        <Image
          source={require("../../assets/images/Dateranges.png")}
          style={{ width: 366, height: 74 }}
        />
      </View>

      <ScrollView horizontal height={80} showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flexDirection: "row",

            marginTop: 20,
          }}
        >
          <Pressable
            style={({ pressed }) => ({
              backgroundColor: pressed ? "#FFC107" : "transparent",
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: pressed ? 10 : 0,
              alignItems: "center",
              justifyContent: "center",
            })}
          >
            {({ pressed }) => (
              <Text
                style={{
                  textAlign: "center",
                  color: pressed ? "white" : "black",
                  paddingHorizontal: 20,
                  fontFamily: "bold",
                }}
              >
                ALL
              </Text>
            )}
          </Pressable>
          <Pressable
            style={({ pressed }) => ({
              backgroundColor: pressed ? "#FFC107" : "transparent",
              paddingHorizontal: 20,
              paddingVertical: 10,
              borderRadius: pressed ? 10 : 0,
              alignItems: "center",
              justifyContent: "center",
            })}
          >
            <Text
              style={({ pressed }) => ({
                textAlign: "center",
                color: pressed ? "white" : "black",
                paddingHorizontal: 20,
                fontFamily: "bold",
              })}
            >
              DELIVERED
            </Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => ({
              backgroundColor: pressed ? "#FFC107" : "transparent",
              borderRadius: pressed ? 10 : 0,
              paddingHorizontal: 10,
              paddingVertical: 10,
              alignItems: "center",
              justifyContent: "center",
            })}
          >
            <Text
              style={({ pressed }) => ({
                textAlign: "center",
                color: pressed ? "white" : "black",
                paddingHorizontal: 20,
                fontFamily: "bold",
              })}
            >
              UNSUCCESSFUL
            </Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => ({
              backgroundColor: pressed ? "#FFC107" : "transparent",
              borderRadius: pressed ? 10 : 0,
              paddingHorizontal: 10,
              paddingVertical: 10,
              alignItems: "center",
              justifyContent: "center",
            })}
          >
            <Text
              style={({ pressed }) => ({
                textAlign: "center",
                color: pressed ? "white" : "black",
                paddingHorizontal: 20,
                fontFamily: "bold",
              })}
            >
              CANCELLED
            </Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => ({
              backgroundColor: pressed ? "#FFC107" : "transparent",
              borderRadius: pressed ? 10 : 0,
              paddingHorizontal: 10,
              paddingVertical: 10,
              alignItems: "center",
              justifyContent: "center",
            })}
          >
            <Text
              style={({ pressed }) => ({
                textAlign: "center",
                color: pressed ? "white" : "black",
                paddingHorizontal: 20,
                fontFamily: "bold",
              })}
            >
              PENDING
            </Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => ({
              backgroundColor: pressed ? "#FFC107" : "transparent",
              borderRadius: pressed ? 10 : 0,
              paddingHorizontal: 10,
              paddingVertical: 10,
              alignItems: "center",
              justifyContent: "center",
            })}
          >
            <Text
              style={({ pressed }) => ({
                textAlign: "center",
                color: pressed ? "white" : "black",
                paddingHorizontal: 20,
                fontFamily: "bold",
              })}
            >
              IN-TRANSIT
            </Text>
          </Pressable>
        </View>
      </ScrollView>

      <View style={{ marginTop: 20 }}>
        <Text>Reports from July 6, 2024 - July 14, 2024</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: 20 }}>
          <Image
            source={require("../../assets/images/Table.png")}
            style={{ height: 570, width: width }}
            resizeMode="contain"
          />
        </View>
      </ScrollView>

      <View style={{ top: 15, bottom: 0 }}>
        <Pressable
          onPress={() => {
            router.push("/reports_export");
          }}
          style={{
            alignContent: "center",
            backgroundColor: "#004EA3",
            borderRadius: 10,
            height: 40,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 15,
              padding: 10,
              fontFamily: "medium",
            }}
          >
            EXPORT REPORTS
          </Text>
        </Pressable>
      </View>
    </QsafeView>
  );
};

export default ReportTables;
