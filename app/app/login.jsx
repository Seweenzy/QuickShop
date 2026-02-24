import { Image, View } from "react-native";
import QsafeView from "../components/safeView";

const Login = () => {
  return (
    <QsafeView>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 200,
        }}
      >
        <Image
          source={require("../assets/images/QsLogo.png")}
          style={{ width: 345, height: 118 }}
        />
      </View>

      <View
        style={{
          marginTop: 50,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../assets/images/splash-img.png")}
          style={{ width: 411, height: 508 }}
        />
      </View>
    </QsafeView>
  );
};

export default Login;
