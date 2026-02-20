import ReportsComp from "../../components/reports_comp";
import QsafeView from "../../components/safeView";
import { ScrollView } from "react-native";
import { router } from "expo-router";

const Reports = () => {
  return (
    <QsafeView>
      <ScrollView>
        <ReportsComp
          shipnum={"ST7890QR12"}
          press1={"Delivered"}
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
        <ReportsComp
          shipnum={"ST7890QR12"}
          press1={"Cancelled"}
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
        <ReportsComp
          shipnum={"ST7890QR12"}
          press1={"Delivered"}
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
      </ScrollView>
    </QsafeView>
  );
};

export default Reports;
