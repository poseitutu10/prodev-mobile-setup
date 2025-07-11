import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="signin" />
      <Stack.Screen name="join" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
