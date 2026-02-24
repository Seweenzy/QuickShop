import { Stack } from "expo-router";

const ProfileLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="change_email" />
      <Stack.Screen name="change_phone" />
      <Stack.Screen name="change_password" />
    </Stack>
  );
};

export default ProfileLayout;
