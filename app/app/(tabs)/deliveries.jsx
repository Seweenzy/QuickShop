import DeliveriesComp from "../../components/deliveries_comp";
import QsafeView from "../../components/safeView";
import { View, Image, Text, ScrollView } from "react-native";
import { router } from "expo-router";

const Deliveries = () => {
  return (
    <QsafeView>
      <ScrollView>
        <View style={{ gap: 30 }}>
          <Image
            source={require("../../assets/images/QsLogo.png")}
            style={{ width: 94, height: 32, alignSelf: "center" }}
          />

          <Text style={{ fontFamily: "bold", fontSize: 20 }}>
            February 17, 2026
          </Text>
        </View>

        <View>
          <DeliveriesComp
            shipnum={"ST7890QR12"}
            press1={"Pending"}
            state={"Ulas, Davao City"}
            city={"Ecoland, Davao City"}
            rec_name={"Shaina Gomez"}
            rec_num={"09652971569"}
            recname_text={"Receivers Name"}
            recnum_text={"Receivers Number"}
            fee={"Delivery Fee"}
            price={"₱543.00"}
            buttonpress={"VIEW DETAILS"}
            delivonpress={() => {
              router.push("/deliveries_pending");
            }}
          />
          <DeliveriesComp
            shipnum={"ST7890QR12"}
            press1={"In-Transit"}
            state={"Ulas, Davao City"}
            city={"Ecoland, Davao City"}
            rec_name={"Shaina Gomez"}
            rec_num={"09652971569"}
            recname_text={"Receivers Name"}
            recnum_text={"Receivers Number"}
            fee={"Delivery Fee"}
            price={"₱543.00"}
            buttonpress={"VIEW DETAILS"}
            delivonpress={() => {
              router.push("/deliveries_intransit");
            }}
          />
          <DeliveriesComp
            shipnum={"ST7890QR12"}
            press1={"In-Transit"}
            state={"Ulas, Davao City"}
            city={"Ecoland, Davao City"}
            rec_name={"Shaina Gomez"}
            rec_num={"09652971569"}
            recname_text={"Receivers Name"}
            recnum_text={"Receivers Number"}
            fee={"Delivery Fee"}
            price={"₱543.00"}
            buttonpress={"VIEW DETAILS"}
            delivonpress={() => {
              router.push("/deliveries_intransit");
            }}
          />
        </View>
      </ScrollView>
    </QsafeView>
  );
};

export default Deliveries;
