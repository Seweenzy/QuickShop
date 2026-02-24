import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="login"
    >
      <Stack.Screen name="login" />
      <Stack.Screen name="registration" />
      <Stack.Screen name="forgotpassword" />
    </Stack>
  );
};

export default AuthLayout;
