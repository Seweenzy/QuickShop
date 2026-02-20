import QsafeView from "../../components/safeView";
import { View, Text, Image, ScrollView } from "react-native";

const Notifications = () => {
  return (
    <QsafeView>
      <ScrollView>
        <View>
          <Image
            source={require("../../assets/images/QsLogo.png")}
            style={{ width: 94, height: 32, alignSelf: "center" }}
          />
        </View>

        <View
          style={{
            marginTop: 30,
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontFamily: "bold", fontSize: 20 }}>Today</Text>
          </View>
          <View>
            <Text
              style={{ fontFamily: "bold", fontSize: 14, color: "#1E63AD" }}
            >
              Mark all as read
            </Text>
          </View>
        </View>

        <View style={{ backgroundColor: "#dfeeff" }}>
          <View style={{ margin: 20, flexDirection: "row", gap: 5 }}>
            <View>
              <Image
                source={require("../../assets/images/notification1.png")}
                style={{ width: 56, height: 56 }}
              />
            </View>
            <View>
              <Text
                style={{ fontFamily: "bold", fontSize: 14, lineHeight: 30 }}
              >
                You have a new delivery assignment.
              </Text>
              <Text style={{ fontFamily: "medium" }}>Just now</Text>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 10,
              marginVertical: 20,
              flexDirection: "row",
              gap: 5,
            }}
          >
            <View>
              <Image
                source={require("../../assets/images/notification4.png")}
                style={{ width: 56, height: 56 }}
              />
            </View>
            <View>
              <Text
                style={{ fontFamily: "bold", fontSize: 14, lineHeight: 30 }}
              >
                Delivery attempt failed. Please attempt {`\n`} redelivery or
                contact support.
              </Text>
              <Text style={{ fontFamily: "medium" }}>5m ago</Text>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 10,
              marginVertical: 20,
              flexDirection: "row",
              gap: 5,
            }}
          >
            <View>
              <Image
                source={require("../../assets/images/notification2.png")}
                style={{ width: 56, height: 56 }}
              />
            </View>
            <View>
              <Text
                style={{ fontFamily: "bold", fontSize: 14, lineHeight: 30 }}
              >
                The delivery has been cancelled.
              </Text>
              <Text style={{ fontFamily: "medium" }}>10m ago</Text>
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: "white", height: 400 }}>
          <View
            style={{
              marginHorizontal: 10,
              marginVertical: 20,
              flexDirection: "row",
              gap: 5,
            }}
          >
            <View>
              <Image
                source={require("../../assets/images/notification5.png")}
                style={{ width: 56, height: 56 }}
              />
            </View>
            <View>
              <Text
                style={{ fontFamily: "bold", fontSize: 14, lineHeight: 30 }}
              >
                The package is on its way to the destination.
              </Text>
              <Text style={{ fontFamily: "medium" }}>15m ago</Text>
            </View>
          </View>
          <View
            style={{
              margin: 20,
              flexDirection: "row",
              gap: 20,
            }}
          >
            <View>
              <Image
                source={require("../../assets/images/notification6.png")}
                style={{ width: 40, height: 40 }}
              />
            </View>
            <View>
              <Text
                style={{ fontFamily: "bold", fontSize: 14, lineHeight: 20 }}
              >
                You have confirmed the delivery assignment.
              </Text>
              <Text style={{ fontFamily: "medium" }}>18m ago</Text>
            </View>
          </View>
          <View
            style={{
              marginHorizontal: 10,
              marginVertical: 20,
              flexDirection: "row",
              gap: 5,
            }}
          >
            <View>
              <Image
                source={require("../../assets/images/notification3.png")}
                style={{ width: 56, height: 56 }}
              />
            </View>
            <View>
              <Text
                style={{ fontFamily: "bold", fontSize: 14, lineHeight: 20 }}
              >
                Delivery completed successfully.
              </Text>
              <Text style={{ fontFamily: "medium" }}>23m ago</Text>
            </View>
          </View>
          <View
            style={{
              marginTop: 30,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text style={{ fontFamily: "bold", fontSize: 20 }}>
                Yesterday
              </Text>
            </View>
            <View>
              <Text
                style={{ fontFamily: "bold", fontSize: 14, color: "#1E63AD" }}
              >
                Mark all as read
              </Text>
            </View>
          </View>

          <View style={{ backgroundColor: "#dfeeff" }}>
            <View style={{ margin: 20, flexDirection: "row", gap: 5 }}>
              <View>
                <Image
                  source={require("../../assets/images/notification1.png")}
                  style={{ width: 56, height: 56 }}
                />
              </View>
              <View>
                <Text
                  style={{ fontFamily: "bold", fontSize: 14, lineHeight: 30 }}
                >
                  You have a new delivery assignment.
                </Text>
                <Text style={{ fontFamily: "medium" }}>Just now</Text>
              </View>
            </View>
            <View
              style={{
                marginHorizontal: 10,
                marginVertical: 20,
                flexDirection: "row",
                gap: 5,
              }}
            >
              <View>
                <Image
                  source={require("../../assets/images/notification4.png")}
                  style={{ width: 56, height: 56 }}
                />
              </View>
              <View>
                <Text
                  style={{ fontFamily: "bold", fontSize: 14, lineHeight: 30 }}
                >
                  Delivery attempt failed. Please attempt {`\n`} redelivery or
                  contact support.
                </Text>
                <Text style={{ fontFamily: "medium" }}>5m ago</Text>
              </View>
            </View>
            <View
              style={{
                marginHorizontal: 10,
                marginVertical: 20,
                flexDirection: "row",
                gap: 5,
              }}
            >
              <View>
                <Image
                  source={require("../../assets/images/notification2.png")}
                  style={{ width: 56, height: 56 }}
                />
              </View>
              <View>
                <Text
                  style={{ fontFamily: "bold", fontSize: 14, lineHeight: 30 }}
                >
                  The delivery has been cancelled.
                </Text>
                <Text style={{ fontFamily: "medium" }}>10m ago</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </QsafeView>
  );
};

export default Notifications;
