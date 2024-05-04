import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Home = ({ navigation }) => {
  return (
    <View style={styles.navContainer}>
      <Text style={styles.text}>Pick a fruit</Text>
      <View style={styles.buttonsDiv}>
        <Button
          title="Pick Apple"
          onPress={() =>
            navigation.navigate("DetailsScreen", {
              fruitname: "Apple",
              fruitImage:
                "https://images.pexels.com/photos/206959/pexels-photo-206959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            })
          }
          style={styles.buttonDiv}
        />
        <Button
          title="Pick Mango"
          onPress={() =>
            navigation.navigate("DetailsScreen", {
              fruitname: "Mango",
              fruitImage: "https://images.pexels.com/photos/2935021/pexels-photo-2935021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            })
          }
          style={styles.buttonDiv}
        />
        <Button
          title="Pick Orange"
          onPress={() =>
            navigation.navigate("DetailsScreen", {
              fruitname: "Orange",
              fruitImage: "https://images.pexels.com/photos/327098/pexels-photo-327098.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            })
          }
          style={styles.buttonDiv}
        />

        <Button
          title="View all users as Scrollview example"
          onPress={() => navigation.navigate("ViewUsers")}
          style={styles.buttonDiv}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 40,
    marginBottom: 20,
  },

  buttonsDiv: {
    display: "flex",
    flexDirection: "column",
    gap: 30,
  },

  buttonDiv: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});
export default Home;
