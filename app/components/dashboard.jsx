import QsafeView from "../components/safeView";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";

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
  stat_date,
  stat_time,
  in_trans,
  in_coms,
  location,
  address,
}) => {
  return (
    <QsafeView>
      <View>
        {image && <Image source={image} style={styles.image} />}

        <View style={{ flexDirection: "row", gap: 5, marginTop: 10 }}>
          <View>
            {iconimage && <Image source={iconimage} style={styles.icon} />}
          </View>

          <View>
            {location && (
              <Text style={{ fontFamily: "regular" }}>{location}</Text>
            )}

            {address && <Text style={{ fontFamily: "medium" }}>{address}</Text>}
          </View>
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 20,
          marginLeft: 10,
          marginRight: 10,
        }}
      >
        {in_trans && (
          <Text style={{ fontFamily: "bold", color: "#004EA3", fontSize: 16 }}>
            {in_trans}
          </Text>
        )}

        <View style={{ flexDirection: "row" }}>
          {in_coms && (
            <Text
              style={{ fontFamily: "light", color: "#7A8189", fontSize: 16 }}
            >
              {in_coms}
            </Text>
          )}
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
          <View style={{ flexDirection: "row", gap: 5 }}>
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
            style={{
              height: 180,
              backgroundColor: "#F2F2F2",
              borderRadius: 8,
              padding: 20,
            }}
          >
            <View>
              <Text style={{ color: "#727272" }}>{stat_date}</Text>
              <Text style={{ color: "#727272" }}>{stat_time}</Text>
            </View>

            <View></View>
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <Pressable
            style={{
              backgroundColor: "#FFC107",
              padding: 12,
              borderRadius: 8,
              marginTop: 30,
            }}
            onPress={() => console.log("Get Started pressed")}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 18,
                fontFamily: "medium",
                textAlign: "center",
                alignContent: "center",
              }}
            >
              UNSUCCESSFUL
            </Text>
          </Pressable>
          <Pressable
            style={{
              backgroundColor: "#004EA3",
              padding: 10,
              borderRadius: 8,
              marginTop: 30,
            }}
            onPress={() => console.log("Get Started pressed")}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 18,
                fontFamily: "medium",
                textAlign: "center",
                alignContent: "center",
              }}
            >
              DELIVERED
            </Text>
          </Pressable>
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
