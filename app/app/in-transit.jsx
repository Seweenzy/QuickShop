import { Text } from "react-native";

import Dashboard from "../components/dashboard";
import QsafeView from "../components/safeView";

const InTransit = () => {
  return (
    <QsafeView>
      <Dashboard />

      <Text>Hello Intransit</Text>
    </QsafeView>
  );
};

export default InTransit;
