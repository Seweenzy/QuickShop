import { ScrollView, View } from "react-native";

import Dashboard from "../components/dashboard";
import QsafeView from "../components/safeView";

const InTransit = () => {
  return (
    <QsafeView bgColor={"white"}>
      <ScrollView>
        <Dashboard
          image={require("../assets/images/QsLogo.png")}
          iconimage={require("../assets/images/qs-icon.png")}
          card={require("../assets/images/delivery-card.png")}
          shipnumber="AB1234XY78"
          priceImg={require("../assets/images/fee_1.png")}
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
        />

        <View style={{ marginTop: 20 }}></View>

        <Dashboard
          card={require("../assets/images/delivery-card.png")}
          shipnumber="AB1234XY78"
          priceImg={require("../assets/images/fee_1.png")}
          state={"Toril, Davao City"}
          city={"Matina, Davao City"}
          recnumber={"09863162371"}
          recname={"Paul Cortez"}
          stat_date={"12/02/2026"}
          stat_time={" 04:18PM"}
        />

        <View style={{ marginTop: 20 }}></View>

        <Dashboard
          image={require("../assets/images/QsLogo.png")}
          iconimage={require("../assets/images/qs-icon.png")}
          card={require("../assets/images/delivery-card.png")}
          shipnumber="AB1234XY78"
          priceImg={require("../assets/images/fee_1.png")}
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
        />
      </ScrollView>
    </QsafeView>
  );
};

export default InTransit;
