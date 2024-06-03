import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { useSelector } from "react-redux";

const Header = () => {

  const cartData = useSelector((state) => state.reducer);
  const [cartItems, setCartItems] = useState(cartData);
  // console.warn(cartData);

  useEffect(() => {
    setCartItems(cartData.length);
  }, [cartData]);

  return (
    <View style={styles.headerDiv}>
      <Text style={styles.text}>Total Number of Items: {cartItems}</Text>
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
