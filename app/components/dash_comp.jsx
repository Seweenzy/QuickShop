import QsafeView from "./safeView";
import { Image, StyleSheet, View, Text, Pressable } from "react-native";

const Dash_comp = ({
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
  press_1,
  press_2,
  router,
  onPress1,
  onPress2,
  statusimg,
}) => {
  return (
    <QsafeView>
      {View && (
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

              {address && (
                <Text style={{ fontFamily: "medium" }}>{address}</Text>
              )}
            </View>
          </View>
        </View>
      )}

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
          <Text>Status</Text>
          <Image source={statusimg} style={{ height: 160, width: 355 }} />
        </View>

        <View style={{ flexDirection: "row", gap: 5 }}>
          <Pressable
            style={{
              backgroundColor: "#FFC107",

              padding: 10,
              borderRadius: 8,
              marginTop: 30,
              height: 45,
              width: 175,
            }}
            onPress={onPress1}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 17,
                fontFamily: "medium",
                textAlign: "center",
                alignContent: "center",
              }}
            >
              {press_1}
            </Text>
          </Pressable>

          <Pressable
            style={{
              backgroundColor: "#004EA3",
              padding: 10,
              borderRadius: 8,
              marginTop: 30,
              height: 45,
              width: 175,
              alignContent: "center",
            }}
            onPress={onPress2}
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
              {press_2}
            </Text>
          </Pressable>
        </View>
      </View>
    </QsafeView>
  );
};

export default Dash_comp;

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
