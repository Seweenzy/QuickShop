import QsafeView from "../../components/safeView";
import Dash_comp from "../../components/dash_comp";
import { View, ScrollView, Alert } from "react-native";
import { router } from "expo-router";

const TransitUnsuccessful = () => {
  return (
    <QsafeView bgColor={"white"}>
      <ScrollView>
        <Dash_comp
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
          press_1={"UNSUCCESSFUL"}
          press_2={"DELIVERED"}
          onPress1={() => {
            Alert.alert("Unsuccessful", "This delivery failed,");
          }}
          onPress2={() => router.push("../transitIncoming")}
        />

        <View style={{ marginTop: 20 }}></View>

        <Dash_comp
          card={require("../../assets/images/delivery-card.png")}
          shipnumber="AB1234XY78"
          priceImg={require("../../assets/images/fee_1.png")}
          state={"Toril, Davao City"}
          city={"Matina, Davao City"}
          recnumber={"09863162371"}
          recname={"Paul Cortez"}
          stat_date={"12/02/2026"}
          stat_time={" 04:18PM"}
          press_1={"UNSUCCESSFUL"}
          press_2={"DELIVERED"}
          onPress1={() => {
            Alert.alert("Unsuccessful", "This delivery failed,");
          }}
        />

        <View style={{ marginTop: 20 }}></View>

        <Dash_comp
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
          press_1={"UNSUCCESSFUL"}
          press_2={"DELIVERED"}
          onPress1={() => {
            Alert.alert("Unsuccessful", "This delivery failed,");
          }}
        />
      </ScrollView>
    </QsafeView>
  );
};

export default TransitUnsuccessful;
