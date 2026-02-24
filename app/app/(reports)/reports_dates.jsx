import QsafeView from "../../components/safeView";
import { View, Text, Image, Pressable } from "react-native";
import Feather from "@expo/vector-icons/Feather";
import { router } from "expo-router";

const ReportDates = () => {
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

      <View style={{ marginTop: 30 }}>
        <Image
          source={require("../../assets/images/DatePicker.png")}
          style={{ height: 460, width: 398 }}
        />
      </View>

      <View style={{ top: 100, bottom: 0 }}>
        <Pressable
          onPress={() => {
            router.push("../reports_table");
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
              fontSize: 14,
              padding: 10,
              fontFamily: "medium",
            }}
          >
            CONFIRM DATES
          </Text>
        </Pressable>
      </View>
    </QsafeView>
  );
};

export default ReportDates;
