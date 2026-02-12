import Dashboard from "../components/dashboard";
import QsafeView from "../components/safeView";

const InTransit = () => {
  return (
    <QsafeView bgColor={"white"}>
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
      />
    </QsafeView>
  );
};

export default InTransit;
