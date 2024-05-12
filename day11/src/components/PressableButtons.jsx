import React from "react";
import { View, StyleSheet, Pressable, Text, StatusBar } from "react-native";
import HeaderDiv from "./HeaderDiv";
import GoBack from "./GoBack";

const PressableButtons = ({ navigation }) => {
  return (
    <View style={styles.mainDiv}>

        {/* <StatusBar 
        backgroundColor="orange"
        /> */}

      <HeaderDiv headingText="Types of Pressables" />

      <View>
          <Pressable
            onPress={() => console.warn("Normal press")}
            onLongPress={() => console.warn("Long press")}
          >
            <Text style={styles.pressableBtn}>Pressable1</Text>
          </Pressable>

          <Pressable
            onPressIn={() => console.warn("press in")}
            onPressOut={() => console.warn("press out")}
          >
            <Text style={styles.pressableBtn}>Pressable2</Text>
          </Pressable>
      </View>

      <GoBack navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  mainDiv: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-between",
  },

  pressableBtn: {
    backgroundColor: "#0090FF",
    color: "#fff",
    padding: 10,
    margin: 10,
    borderRadius: 5,
    fontSize: 20,
    textAlign: "center",
    shadowColor: "#000",
    elevation: 5,
  },
});

export default PressableButtons;
