import QsafeView from "../components/safeView";
import { Image, StyleSheet, View, Text } from "react-native";

const Dashboard = ({ Source }) => {
  return (
    <QsafeView>
      <Image source={Source} style={styles.image} />

      <View>
        <View>
          <Image source={Source} style={styles.icon} />
        </View>

        <View>
          <Text>Location</Text>
          <Text>
            Agton Streets, Corner De Guzman St, Toril, Davao City, 8000 Davao
            del Sur
          </Text>
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
  },

  icon: {
    width: 44,
    height: 44,
  },
});
