import { Link, useGlobalSearchParams } from "expo-router";
import { Button, Pressable, StyleSheet, Text } from "react-native";
import Animated, { FadeIn, SlideInDown } from "react-native-reanimated";

export default function SettingsScreen() {
  const params = useGlobalSearchParams();
  console.log(params);
  return (
    <Animated.View
      entering={FadeIn}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#00000040",
      }}
    >
      {/* Dissmiss modal when pressing outside */}
      <Link href={"/"} asChild>
        <Pressable style={StyleSheet.absoluteFill} />
      </Link>
      <Animated.View
        entering={SlideInDown}
        style={{
          width: "90%",
          height: "50%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <Text style={{ fontWeight: "bold", marginBottom: 10 }}>
          Hello {params.profileId ? params.profileId : "world"}! 👋
        </Text>
        <Link asChild href="/">
          <Button title="← Go back" />
        </Link>
      </Animated.View>
    </Animated.View>
  );
}
