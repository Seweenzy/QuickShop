import QsafeView from "../../components/safeView";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { ImageBackground, View, Text, Pressable, Image } from "react-native";
const DeliveriesIntransit = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/images/map.png")}
        imageStyle={{ height: 402 }}
      >
        <View
          style={{
            backgroundColor: "#004EA3",
            width: 50,
            height: 50,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
            marginLeft: 10,
          }}
        >
          <Pressable
            onPress={() => {
              router.push("../deliveries");
            }}
          >
            <AntDesign name="arrow-left" size={25} color="white" />
          </Pressable>
        </View>
      </ImageBackground>

      <View
        style={{
          backgroundColor: "white",
          position: "absolute",
          top: "36%",
          bottom: 0,
          left: 0,
          right: 0,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            margin: 20,
            justifyContent: "space-between",
          }}
        >
          <View style={{ gap: 5 }}>
            <Text style={{ fontFamily: "medium" }}>
              Estimated Time of Arrival
            </Text>
            <Text style={{ fontFamily: "bold" }}>10:23AM</Text>
          </View>
          <View>
            <Pressable
              style={{
                backgroundColor: "#FFF9E6",
                padding: 10,
                borderRadius: 10,
                height: 45,
                width: 96,
              }}
            >
              <Text
                style={{
                  fontFamily: "bold",
                  alignSelf: "center",
                  color: "#7B682C",
                  fontSize: 14,
                }}
              >
                In-Transit
              </Text>
            </Pressable>
          </View>
        </View>

        <View>
          <Image
            source={require("../../assets/images/Statuscard.png")}
            style={{ width: 420, height: 160 }}
          />
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <View style={{ gap: 10 }}>
            <Text style={{ fontFamily: "medium", fontSize: 18 }}>
              Senders Name
            </Text>
            <Text style={{ fontFamily: "bold", fontSize: 18 }}>
              Phoebe Jimenez
            </Text>
            <Text style={{ fontFamily: "medium", fontSize: 18 }}>
              Reveivers Number
            </Text>
            <Text style={{ fontFamily: "bold", fontSize: 18 }}>
              Phoebe Jimenez
            </Text>
          </View>
          <View style={{ gap: 10 }}>
            <Text style={{ fontFamily: "medium", fontSize: 18 }}>
              Senders Nuumber
            </Text>
            <Text style={{ fontFamily: "bold", fontSize: 18 }}>
              09863162371
            </Text>
            <Text style={{ fontFamily: "medium", fontSize: 18 }}>
              Receivers Nuumber
            </Text>
            <Text style={{ fontFamily: "bold", fontSize: 18 }}>
              09863162371
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <Text style={{ fontFamily: "medium", fontSize: 16 }}>
            Payment Method: Cash on Delivery
          </Text>
          <Text style={{ fontFamily: "medium", fontSize: 16 }}>
            Delivery Fee: ₱150.00
          </Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Pressable
            style={{
              backgroundColor: "#FFC107",

              padding: 10,
              borderRadius: 8,
              marginTop: 30,
              height: 45,
              width: 175,
            }}
            onPress={() => {
              router.push("./deliveries_pending");
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 17,
                fontFamily: "medium",
                textAlign: "center",
                alignContent: "center",
              }}
            >
              UNSUCCESSFUL
            </Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: "#004EA3",

              padding: 10,
              borderRadius: 8,
              marginTop: 30,
              height: 45,
              width: 175,
            }}
            onPress={() => console.log("I was clicked")}
          >
            <Text
              style={{
                color: "#FFF",
                fontSize: 17,
                fontFamily: "medium",
                textAlign: "center",
                alignContent: "center",
              }}
            >
              DELIVERED
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DeliveriesIntransit;
