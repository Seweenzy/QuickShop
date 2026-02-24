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
import Fontisto from "@expo/vector-icons/Fontisto";
import Foundation from "@expo/vector-icons/Foundation";

const ReportsExport = () => {
  const { width } = Dimensions.get("screen");
  return (
    <QsafeView bgColor="#D3D4D5">
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
          backgroundColor: "#D3D4D5",

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

      <ScrollView height={80} horizontal showsHorizontalScrollIndicator={false}>
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
              borderRadius: pressed ? 10 : 0,
              alignItems: "center",
              justifyContent: "center",
            })}
          >
            <Text
              style={({ pressed }) => ({
                textAlign: "center",
                color: pressed ? "white" : "black",
                fontFamily: "bold",
              })}
            >
              ALL
            </Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => ({
              backgroundColor: pressed ? "#FFC107" : "transparent",
              paddingHorizontal: 20,
              borderRadius: pressed ? 10 : 0,
              alignItems: "center",
              justifyContent: "center",
            })}
          >
            <Text
              style={({ pressed }) => ({
                textAlign: "center",
                color: pressed ? "white" : "black",
                fontFamily: "bold",
              })}
            >
              DELIVERED
            </Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => ({
              backgroundColor: pressed ? "#FFC107" : "transparent",
              paddingHorizontal: 20,
              borderRadius: pressed ? 10 : 0,
              alignItems: "center",
              justifyContent: "center",
            })}
          >
            <Text
              style={({ pressed }) => ({
                textAlign: "center",
                color: pressed ? "white" : "black",
                fontFamily: "bold",
              })}
            >
              UNSUCCESSFUL
            </Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => ({
              backgroundColor: pressed ? "#FFC107" : "transparent",
              paddingHorizontal: 20,
              borderRadius: pressed ? 10 : 0,
              alignItems: "center",
              justifyContent: "center",
            })}
          >
            <Text
              style={({ pressed }) => ({
                textAlign: "center",
                color: pressed ? "white" : "black",
                fontFamily: "bold",
              })}
            >
              CANCELLED
            </Text>
          </Pressable>
          <Pressable
            style={({ pressed }) => ({
              backgroundColor: pressed ? "#FFC107" : "transparent",
              paddingHorizontal: 20,
              borderRadius: pressed ? 10 : 0,
              alignItems: "center",
              justifyContent: "center",
            })}
          >
            <Text
              style={({ pressed }) => ({
                textAlign: "center",
                color: pressed ? "white" : "black",
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

      <View
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          top: "90%",
          padding: 20,
          backgroundColor: "white",
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          marginVertical: 5,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            gap: 10,
            borderBottomWidth: 1,
            borderBottomColor: "#e0e0e0",
            paddingBottom: 10,
          }}
        >
          <Fontisto name="email" size={24} color="black" />
          <Text
            style={{
              fontSize: 18,
              fontWeight: "medium",
            }}
          >
            Export to Email
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            gap: 20,

            paddingVertical: 10,
          }}
        >
          <Foundation name="page-csv" size={26} color="black" />
          <Text style={{ fontSize: 18, fontWeight: "medium" }}>
            Export as CSV
          </Text>
        </View>
      </View>
    </QsafeView>
  );
};

export default ReportsExport;
