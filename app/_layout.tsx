import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(client)" />
      <Stack.Screen name="(admin)" />
    </Stack>
  );
}