import ReportsComp from "../../components/reports_comp";
import QsafeView from "../../components/safeView";
import {
  ScrollView,
  Image,
  View,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import { router } from "expo-router";
import EvilIcons from "@expo/vector-icons/EvilIcons";

const Reports = () => {
  return (
    <QsafeView>
      <Image
        source={require("../../assets/images/QsLogo.png")}
        style={{ width: 94, height: 32, alignSelf: "center" }}
      />

      <View style={{ marginTop: 20, marginHorizontal: 10 }}>
        <Text style={{ fontFamily: "bold", fontSize: 20 }}>Reports</Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "white",
          paddingHorizontal: 10,
          borderRadius: 10,
          marginHorizontal: 10,
          borderColor: "#f0f0f0",
          borderWidth: 3,
        }}
      >
        <EvilIcons
          name="search"
          size={24}
          color="black"
          style={{ alignSelf: "center" }}
        />
        <TextInput
          placeholder="Search shipment number"
          style={{
            borderColor: "black",
            paddingHorizontal: 10,
            height: 40,
          }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          marginHorizontal: 10,
          marginVertical: 20,
          justifyContent: "space-between",
        }}
      >
        <View style={{ alignContent: "center", alignSelf: "center" }}>
          <Text
            style={{
              fontFamily: "medium",
              fontSize: 16,
            }}
          >
            Recent Deliveries
          </Text>
        </View>
        <Pressable
          onPress={() => {
            router.push("/reports_dates");
          }}
        >
          <View>
            <Image
              source={require("../../assets/images/dates.png")}
              style={{ width: 139, height: 40 }}
            />
          </View>
        </Pressable>
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

      <ScrollView>
        <ReportsComp
          shipnum={"ST7890QR12"}
          press1={"Delivered"}
          state={"Ulas, Davao City"}
          city={"Ecoland, Davao City"}
          departure_time={"08/23/2023  8:29PM"}
          depart_name={"Departure Time"}
          arrival_time={"08/23/2023 9:12AM"}
          arrival_name={"Arrival Time"}
          fee={"Delivery Fee"}
          price={"₱543.00"}
          buttonpress={"VIEW DETAILS"}
          delivonpress={() => {
            router.push("/deliveries_pending");
          }}
        />
        <ReportsComp
          shipnum={"ST7890QR12"}
          press1={"Cancelled"}
          state={"Ulas, Davao City"}
          city={"Ecoland, Davao City"}
          departure_time={"08/23/2023  8:29PM"}
          depart_name={"Departure Time"}
          arrival_time={"08/23/2023 9:12AM"}
          arrival_name={"Arrival Time"}
          fee={"Delivery Fee"}
          price={"₱543.00"}
          buttonpress={"VIEW DETAILS"}
          delivonpress={() => {
            router.push("/deliveries_pending");
          }}
        />
        <ReportsComp
          shipnum={"ST7890QR12"}
          press1={"Delivered"}
          state={"Ulas, Davao City"}
          city={"Ecoland, Davao City"}
          departure_time={"08/23/2023  8:29PM"}
          depart_name={"Departure Time"}
          arrival_time={"08/23/2023 9:12AM"}
          arrival_name={"Arrival Time"}
          fee={"Delivery Fee"}
          price={"₱543.00"}
          buttonpress={"VIEW DETAILS"}
          delivonpress={() => {
            router.push("/deliveries_pending");
          }}
        />
      </ScrollView>
    </QsafeView>
  );
};

export default Reports;
