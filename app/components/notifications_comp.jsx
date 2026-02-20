import { View, Text, Image } from "react-native";
import QsafeView from "./safeView";

const NotificationsComp = ({
  day,
  mark,
  image,
  msg,
  time,
  image2,
  msg2,
  time2,
  images,
  times,
  msgs,
}) => {
  return (
    <QsafeView>
      <View
        style={{
          marginTop: 30,
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <View>
          <Text style={{ fontFamily: "bold", fontSize: 20 }}>{day}</Text>
        </View>
        <View>
          <Text style={{ fontFamily: "bold", fontSize: 14, color: "#1E63AD" }}>
            {mark}
          </Text>
        </View>
      </View>

      <View style={{ height: 400, backgroundColor: "#dfeeff" }}>
        <View style={{ margin: 10, flexDirection: "row", gap: 10 }}>
          <View>
            <Image source={image} style={{ height: 50, width: 40 }} />
          </View>
          <View>
            <Text style={{ fontFamily: "bold", fontSize: 16 }}>{msg}</Text>
            <Text style={{ fontFamily: "medium" }}>{time}</Text>
          </View>
        </View>
        <View style={{ margin: 10, flexDirection: "row", gap: 10 }}>
          <View>
            <Image source={images} style={{ height: 60, width: 40 }} />
          </View>
          <View>
            <Text style={{ fontFamily: "bold", fontSize: 16 }}>{msgs}</Text>
            <Text style={{ fontFamily: "medium" }}>{times}</Text>
          </View>
        </View>
      </View>
      <View style={{ height: 300, backgroundColor: "white" }}>
        <View style={{ margin: 10, flexDirection: "row", gap: 10 }}>
          <View>
            <Image source={image2} style={{ height: 50, width: 40 }} />
          </View>
          <View>
            <Text style={{ fontFamily: "bold", fontSize: 16 }}>{msg2}</Text>
            <Text style={{ fontFamily: "medium" }}>{time2}</Text>
          </View>
        </View>
      </View>
    </QsafeView>
  );
};

export default NotificationsComp;
