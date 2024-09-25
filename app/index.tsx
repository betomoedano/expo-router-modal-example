import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Link
        href={{ pathname: "/modal", params: { profileId: "@betomoedano" } }}
        push
        style={{ color: "blue", fontWeight: "bold" }}
        // replace
      >
        Present modal
      </Link>
    </View>
  );
}
