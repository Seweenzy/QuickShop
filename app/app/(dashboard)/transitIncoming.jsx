import QsafeView from "../../components/safeView";
import Incoming_comp from "../../components/incoming_comp";
import { View, ScrollView } from "react-native";
import { router } from "expo-router";

const TransitIncoming = () => {
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
            router.push("../incomingDeclined");
          }}
          statusimg={require("../../assets/images/Statuscard2.png")}
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
          statusimg={require("../../assets/images/Statuscard2.png")}
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
          in_trans={"In-Transit"}
          in_coms={"In-Coming"}
          press_1={"DECLINE"}
          press_2={"ACCEPT"}
          statusimg={require("../../assets/images/Statuscard2.png")}
        />
      </ScrollView>
    </QsafeView>
  );
};

export default TransitIncoming;
