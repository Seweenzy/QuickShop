import { Tabs } from "expo-router";
import { Image } from "react-native";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#004ea3",
        tabBarInActiveTintColor: "#49454f",
        tabBarStyle: {
          height: 90,
          alignItems: "center",
          backgroundColor: "white",
        },
        tabBarLabelStyle: {
          fontSize: 11, // increase this to make text bigger
          marginTop: 2,
          fontFamily: "medium",
        },
        tabBarIconStyle: {
          marginTop: 10,
        },
      }}
    >
      <Tabs.Screen
        name="dashboard"
        options={{
          title: "Dashboard",
          tabBarIcon: ({ focused, color }) => (
            <Image
              source={require("../../assets/images/dashboard-tab.png")}
              style={{
                width: 32,
                height: 32,
                padding: 15,
                tintColor: color,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="reports"
        options={{
          title: "Reports",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/images/report-tab.png")}
              style={{
                width: 32,
                height: 32,
                padding: 15,
                tintColor: focused ? "#004ea3" : "#49454f",
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="deliveries"
        options={{
          title: "Deliveries",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/images/delivery-tab.png")}
              style={{
                width: 32,
                height: 32,
                padding: 15,
                tintColor: focused ? "#004ea3" : "#49454f",
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="notifications"
        options={{
          title: "Notifications",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/images/notification-tab.png")}
              style={{
                width: 32,
                height: 32,
                padding: 15,
                tintColor: focused ? "#004ea3" : "#49454f",
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("../../assets/images/profile-tab.png")}
              style={{
                width: 32,
                height: 32,
                padding: 15,
                tintColor: focused ? "#004ea3" : "#49454f",
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
