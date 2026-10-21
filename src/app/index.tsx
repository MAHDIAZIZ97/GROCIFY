import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.body}>Grocify</Text>
      <Link href={`./about`} style={newStyles.link} >About Screen</Link>
      <Link href={"./contact"} style={newStyles.link}>Contact</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "gray",
  },
  body: {
    color: "yellow",
    fontSize: 40,
    fontWeight: 500
  }
});

const newStyles = StyleSheet.create({
  link: {
      color: "white",
      fontSize: 30,
      marginTop: 10,
      
  }
})
