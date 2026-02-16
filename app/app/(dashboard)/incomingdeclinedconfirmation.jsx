import QsafeView from "../../components/safeView";
import Incoming_comp from "../../components/incoming_comp";
import { View, ScrollView, Alert } from "react-native";
import { router } from "expo-router";

const IncomingDeclinedConfirmation = () => {
  return (
    <QsafeView bgColor={"white"}>
      <ScrollView>
        <Incoming_comp
          image={require("../../assets/images/QsLogo.png")}
          iconimage={require("../../assets/images/qs-icon.png")}
          card={require("../../assets/images/delivery-card.png")}
          shipnumber="AB1234XY78"
          priceImg={require("../../assets/images/fee_1.png")}
          state={"Toril, Davao City"}
          city={"Matina, Davao City"}
          recnumber={"09863162371"}
          recname={"Paul Cortez"}
          stat_date={"12/02/2026"}
          stat_time={" 04:18PM"}
          in_trans={"In-Transit"}
          in_coms={"In-Coming"}
          location={"Location"}
          address={"Agton Streets,Corner De Guzman St,Toril"}
          press_1={"DECLINE"}
          press_2={"ACCEPT"}
          onPress1={() => {
            Alert.alert(
              " Delivery Declined",
              "You have declined delivery. This delivery will be removed from your list",
              [
                {
                  text: "OK",
                  onPress: () => {
                    router.push("/incomingaccept");
                  },
                },
              ],
            );
          }}
          onPress2={() => {
            router.push("/incomingaccept");
          }}
        />

        <View style={{ marginTop: 20 }}></View>

        <Incoming_comp
          card={require("../../assets/images/delivery-card.png")}
          shipnumber="AB1234XY78"
          priceImg={require("../../assets/images/fee_1.png")}
          state={"Toril, Davao City"}
          city={"Matina, Davao City"}
          recnumber={"09863162371"}
          recname={"Paul Cortez"}
          stat_date={"12/02/2026"}
          stat_time={" 04:18PM"}
          press_1={"DECLINE"}
          press_2={"ACCEPT"}
          onPress1={() => {
            Alert.alert(
              " Delivery Declined",
              "You have declined delivery. This delivery will be removed from your list",
              [{ text: "OK", onPress: () => console.log("YES Pressed") }],
            );
          }}
        />

        <View style={{ marginTop: 20 }}></View>

        <Incoming_comp
          image={require("../../assets/images/QsLogo.png")}
          iconimage={require("../../assets/images/qs-icon.png")}
          card={require("../../assets/images/delivery-card.png")}
          shipnumber="AB1234XY78"
          priceImg={require("../../assets/images/fee_1.png")}
          state={"Toril, Davao City"}
          city={"Matina, Davao City"}
          recnumber={"09863162371"}
          recname={"Paul Cortez"}
          stat_date={"12/02/2026"}
          stat_time={" 04:18PM"}
          in_trans={"In-Transit"}
          in_coms={"In-Coming"}
          location={"Location"}
          address={"Agton Streets,Corner De Guzman St,Toril"}
          press_1={"DECLINE"}
          press_2={"ACCEPT"}
          onPress1={() => {
            Alert.alert(
              " Delivery Declined",
              "You have declined delivery. This delivery will be removed from your list",
              [{ text: "OK", onPress: () => console.log("YES Pressed") }],
            );
          }}
        />
      </ScrollView>
    </QsafeView>
  );
};

export default IncomingDeclinedConfirmation;
