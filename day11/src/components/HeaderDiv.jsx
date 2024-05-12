import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HeaderDiv = ({headingText}) => {
    return (
        <View><Text style={styles.headingText}>{headingText}</Text></View>
    )
}

const styles = StyleSheet.create({
    headingText: {
      fontSize: 40,
      fontWeight: "bold",
      textAlign: "center",
    },
  
});
  
export default HeaderDiv;
  