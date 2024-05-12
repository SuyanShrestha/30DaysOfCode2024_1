import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

import GoBack from "./GoBack";
import HeaderDiv from "./HeaderDiv";

const users = [
  {
    id: 1,
    name: "Suyan Shrestha",
    age: 25,
    favoriteFruit: "Apple",
  },
  {
    id: 2,
    name: "Shristi Koju",
    age: 25,
    favoriteFruit: "Mango",
  },
  {
    id: 3,
    name: "Suyan Shrestha",
    age: 25,
    favoriteFruit: "Apple",
  },
  {
    id: 4,
    name: "Shristi Koju",
    age: 25,
    favoriteFruit: "Mango",
  },
  {
    id: 5,
    name: "Suyan Shrestha",
    age: 25,
    favoriteFruit: "Apple",
  },
  {
    id: 6,
    name: "Shristi Koju",
    age: 25,
    favoriteFruit: "Mango",
  },
  {
    id: 7,
    name: "Suyan Shrestha",
    age: 25,
    favoriteFruit: "Apple",
  },
  {
    id: 8,
    name: "Shristi Koju",
    age: 25,
    favoriteFruit: "Mango",
  },
  {
    id: 9,
    name: "Suyan Shrestha",
    age: 25,
    favoriteFruit: "Apple",
  },
  {
    id: 10,
    name: "Shristi Koju",
    age: 25,
    favoriteFruit: "Mango",
  },
];



const ViewUsers = ({ navigation }) => {
  
  // const goBack = () => navigation.navigate("HomeScreen");

  return (
    <View>
      <HeaderDiv headingText="ScrollView Example - Users"/>

      {/* map use gareko example */}
      <ScrollView style={{ marginBottom: 30 }}>
        {users.map((item) => (
          <View key={item.id} style={styles.userDiv}>
            <Text>Name: {item.name}</Text>
            <Text>Age: {item.age}</Text>
            <Text>Favorite Fruit: {item.favoriteFruit}</Text>
          </View>
        ))}
        <GoBack navigation={navigation}/>
      </ScrollView>

    </View>
  );
};

const styles = StyleSheet.create({

  userDiv: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
  },

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
    color: '#fff',
    fontWeight: '700',
  },
});

export default ViewUsers;
