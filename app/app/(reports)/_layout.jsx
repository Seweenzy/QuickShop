import QsafeView from "../../components/safeView";
import { Stack } from "expo-router";

const ReportsLayout = () => {
  return (
    <QsafeView>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="reports_dates" />
        <Stack.Screen name="reports_table" />
        <Stack.Screen name="reports_export" />
      </Stack>
    </QsafeView>
  );
};

export default ReportsLayout;
