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

const ReportsExport = () => {
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
          style={{
            alignContent: "center",
            backgroundColor: "#004EA3",
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 16,
              padding: 20,
              fontFamily: "bold",
            }}
          >
            EXPORT REPORTS
          </Text>
        </Pressable>
      </View>
    </QsafeView>
  );
};

export default ReportsExport;
