import { Stack } from "expo-router";

export default function LearnLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" options={{ title: "Learn" }} />
      <Stack.Screen name="create-course" options={{ title: "Create Course" }} />
    </Stack>
  );
}
