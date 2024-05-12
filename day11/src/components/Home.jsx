import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import HeaderDiv from "./HeaderDiv";

const Home = ({ navigation }) => {
  return (
    <View style={styles.navContainer}>
      <HeaderDiv headingText="Home Screen"></HeaderDiv>
      <View style={styles.optionsDiv}>
        <Button
          title="Foods Section"
          onPress={() => navigation.navigate("SectionList")}
        />
      </View>
      <Button
        title="Get API Data"
        onPress={() => navigation.navigate("GetAPIData")}
      />
      <Button
        title="VIew pressables"
        onPress={() => navigation.navigate("PressableButtons")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    gap: 30,
  },
});
export default Home;
