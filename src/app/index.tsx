import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";
import { Image } from "expo-image";

export default function Index() {
  return (
    <View className="bg-red-100 flex justify-center items-center h-full">
      <Text className="text-blue-400 text-3xl font-extrabold uppercase bg-red-100">Grocify </Text>
      <Link href={`./about`} style={newStyles.link}>
        About Page
      </Link>
      <Image source={require("../../assets/images/icon.png")} style={{width: 100, height: 100, borderRadius: 50}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  body: {
    color: "red",
    fontSize: 40,
    fontWeight: 500,
  },
});

const newStyles = StyleSheet.create({
  link: {
    color: "white",
    fontSize: 30,
    marginTop: 10,
  },
});
