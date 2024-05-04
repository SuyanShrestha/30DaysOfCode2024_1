import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const GoBack = ({ navigation }) => {
  const goBack = () => navigation.navigate("HomeScreen");
  return (
    <TouchableOpacity style={styles.buttonDiv} onPress={goBack}>
      <Text style={styles.buttonText}>Go Back</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonDiv: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: "#0090FF",
    alignItems: "center",
    width: 100,
    borderRadius: 3,
    marginHorizontal: 10,
    marginVertical: 10,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "700",
  },
});

export default GoBack;
