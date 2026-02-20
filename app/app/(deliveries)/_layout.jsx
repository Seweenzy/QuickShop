import QsafeView from "../../components/safeView";
import { Stack } from "expo-router";

const DeliveriesLayout = () => {
  return (
    <QsafeView>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="deliveries_intransit" />
        <Stack.Screen name="deliveries_pending" />
      </Stack>
    </QsafeView>
  );
};

export default DeliveriesLayout;
