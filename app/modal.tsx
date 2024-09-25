import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function ModalScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Modal Screen</Text>
      <Link href={"/"} style={{ color: "blue", fontWeight: "bold" }}>
        ← Go back
      </Link>
    </View>
  );
}
