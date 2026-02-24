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
      <Stack.Screen name="register" />
      <Stack.Screen name="forgotpassword" />
      <Stack.Screen name="passwordconfirmation" />
    </Stack>
  );
};

export default AuthLayout;
