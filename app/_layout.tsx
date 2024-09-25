import { Stack } from "expo-router";
import { LogBox } from "react-native";
LogBox.ignoreAllLogs(true);

export const unstable_settings = {
  initialRouteName: "index",
};

export default function RootLayout() {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home 🏠",
          headerLeft: () => <></>,
        }}
      />
      <Stack.Screen
        name="modal"
        options={{
          presentation: "transparentModal",
          animation: "fade",
          headerShown: false,
        }}
      />
    </Stack>
  );
}
