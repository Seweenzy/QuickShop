import QsafeView from "./safeView";
import { Image, View, Text, Pressable } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

const ReportsComp = ({
  shipnum,
  press1,
  state,
  city,
  rec_name,
  recname_text,
  rec_num,
  recnum_text,
  fee,
  price,
  delivonpress,
  buttonpress,
}) => {
  return (
    <QsafeView>
      <View
        style={{
          borderRadius: 10,
          borderColor: "#ccc",
          borderWidth: 0.9,
          backgroundColor: "white",
          padding: 10,
          margin: 0,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View>
            <Image
              source={require("../assets/images/delivery-card.png")}
              style={{
                height: 40,
                width: 40,
                backgroundColor: "#F2F2F2",
                borderRadius: 5,
              }}
            />
          </View>
          <View>
            <Text style={{ fontFamily: "medium" }}>Shipment Number</Text>
            <Text style={{ fontFamily: "bold" }}>{shipnum}</Text>
          </View>
          <View>
            <View>
              <Pressable
                style={[
                  {
                    padding: 10,
                    borderRadius: 8,
                    height: 45,
                    width: 125,
                  },
                  press1 === "Delivered"
                    ? { backgroundColor: "#E7F0EB" }
                    : press1 === "Cancelled"
                      ? { backgroundColor: "#F0E7E7" }
                      : { backgroundColor: "" }, // default
                ]}
              >
                <Text
                  style={[
                    {
                      fontSize: 15,
                      fontFamily: "bold",
                      textAlign: "center",
                    },
                    press1 === "Delivered"
                      ? { color: "#116638" }
                      : press1 === "Cancelled"
                        ? { color: "#650F10" }
                        : { color: "#fff" }, // default
                  ]}
                >
                  {press1}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>

        <View
          style={{ borderWidth: 0.2, Color: "#fbfbfb", marginTop: 20 }}
        ></View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 30,
          }}
        >
          <View>
            <Text style={{ fontFamily: "medium", fontSize: 16 }}>{city}</Text>
          </View>
          <View style={{ height: 24, width: 24 }}>
            <Ionicons name="chevron-forward" size={24} color="black" />
          </View>
          <View>
            <Text style={{ fontFamily: "medium", fontSize: 16 }}>{state}</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View style={{ gap: 5 }}>
            <Text style={{ fontFamily: "medium", fontSize: 14 }}>
              {recname_text}
            </Text>
            <Text style={{ fontFamily: "medium", fontSize: 14 }}>
              {rec_name}
            </Text>
          </View>

          <View style={{ gap: 5 }}>
            <Text style={{ fontFamily: "medium", fontSize: 14 }}>
              {recnum_text}
            </Text>
            <Text
              style={{
                fontFamily: "medium",
                fontSize: 14,
                paddingLeft: 40,
              }}
            >
              {rec_num}
            </Text>
          </View>
        </View>

        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ fontFamily: "bold", fontSize: 14 }}>{fee}</Text>
          <Text style={{ fontFamily: "bold", fontSize: 14 }}>{price}</Text>
        </View>

        <View>
          <Pressable
            style={{
              backgroundColor: "#004EA3",
              padding: 10,
              borderRadius: 8,
              marginTop: 30,
              height: 45,
              alignContent: "center",
            }}
            onPress={delivonpress}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 16,
                fontFamily: "medium",
                textAlign: "center",
                alignContent: "center",
              }}
            >
              {buttonpress}
            </Text>
          </Pressable>
        </View>
      </View>
    </QsafeView>
  );
};

export default ReportsComp;
