import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
    <View style={styles.headerDiv}>
      <Text style={styles.text}>Total Price: NRS 0</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerDiv: {
    flex: 1,
    backgroundColor: "#226F54",
    margin: 20,
    width: "100%",
    borderRadius: 20,
  },
  text: {
    color: "#F9F9F9",
    fontSize: 20,
    textAlign: "flex-end",
    padding: 20,
  },
});

export default Header;
