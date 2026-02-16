import { Stack } from "expo-router";

const DashboardLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="transitUnsuccessful" />
      <Stack.Screen name="transitDelivered" />
      <Stack.Screen name="transitIncoming" />
      <Stack.Screen name="incoming_declined" />
      <Stack.Screen name="incomingdeclined_confirmation" />
      <Stack.Screen name="incomingaccept" />
      <Stack.Screen name="incomingaccept_confirmation" />
    </Stack>
  );
};

export default DashboardLayout;
