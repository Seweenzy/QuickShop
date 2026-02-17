import { Stack } from "expo-router";
import { useFonts } from "expo-font";

const RootLayout = () => {
  const [loaded, error] = useFonts({
    regular: require("../assets/fonts/Montserrat/static/Montserrat-Regular.ttf"),
    medium: require("../assets/fonts/Montserrat/static/Montserrat-Medium.ttf"),
    bold: require("../assets/fonts/Montserrat/static/Montserrat-Bold.ttf"),
    semibold: require("../assets/fonts/Montserrat/static/Montserrat-SemiBold.ttf"),
    light: require("../assets/fonts/Montserrat/static/Montserrat-Light.ttf"),
  });

  console.log("loaded", loaded, "Is error", error);

  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
      InitialRouteName="onboardScreen"
    >
      <Stack.Screen name="onboardScreen" />
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(dashboard)" />
      <Stack.Screen name="(deliveries)" />
      <Stack.Screen name="in-transit" />
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default RootLayout;
