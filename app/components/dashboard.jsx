import QsafeView from "../components/safeView";
import { Image, StyleSheet, View, Text } from "react-native";

const Dashboard = ({
  image,
  iconimage,
  badges,
  card,
  shipnumber,
  priceImg,
  arrow,
  state,
  city,
  recnumber,
  recname,
}) => {
  return (
    <QsafeView>
      <Image source={image} style={styles.image} />

      <View style={{ flexDirection: "row", gap: 5, marginTop: 20 }}>
        <View>
          <Image source={iconimage} style={styles.icon} />
        </View>

        <View>
          <Text style={{ fontFamily: "regular" }}>Location</Text>
          <Text style={{ fontFamily: "medium" }}>
            Agton Streets,Corner De Guzman St,Toril
          </Text>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 30,
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        <Text style={{ fontFamily: "bold", color: "#004EA3", fontSize: 16 }}>
          In-Transit
        </Text>

        <View style={{ flexDirection: "row" }}>
          <Text style={{ fontFamily: "light", color: "#7A8189", fontSize: 16 }}>
            In-Coming
          </Text>
          <Image source={badges} />
        </View>
      </View>

      <View
        style={{
          height: 500,
          borderRadius: 10,
          borderColor: "#ccc",
          borderWidth: 0.9,
          marginTop: 10,
          backgroundColor: "white",
          padding: 10,
        }}
      >
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={card}
              style={{
                height: 40,
                width: 40,
                backgroundColor: "#F2F2F2",
                borderRadius: 5,
              }}
            />
            <View style={{ flexDirection: "column" }}>
              <Text style={{ fontFamily: "medium" }}>Shipment Number</Text>
              <Text style={{ fontFamily: "bold" }}>{shipnumber}</Text>
            </View>
          </View>
          <View>
            <Image source={priceImg} style={{ height: 44, width: 63 }} />
          </View>
        </View>
        <View
          style={{ borderWidth: 0.2, marginTop: 20, borderColor: "grey" }}
        ></View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingTop: 20,
          }}
        >
          <Text style={{ fontFamily: "medium" }}>{state}</Text>
          <Image source={arrow} />
          <Text style={{ fontFamily: "medium" }}>{city}</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 20,
          }}
        >
          <View>
            <Text style={{ fontFamily: "medium" }}>Receivers Name</Text>
            <Text style={{ fontWeight: "bold" }}>{recname}</Text>
          </View>

          <View>
            <Text style={{ fontFamily: "medium" }}>Receivers Number</Text>
            <Text style={{ fontWeight: "bold" }}>{recnumber}</Text>
          </View>
        </View>

        <View style={{ marginTop: 30 }}>
          <Text style={{ fontFamily: "normal", color: "grey" }}>Status</Text>

          <View
            style={{ height: 180, backgroundColor: "#F2F2F2", borderRadius: 8 }}
          ></View>
        </View>
      </View>
    </QsafeView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  image: {
    width: 94,
    height: 32,
    alignSelf: "center",
  },

  icon: {
    width: 44,
    height: 44,
  },

  badges: {
    width: 95,
    height: 16,
  },
});
