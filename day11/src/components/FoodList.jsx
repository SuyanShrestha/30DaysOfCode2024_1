import React from "react";
import { View, Text, SectionList, StyleSheet } from "react-native";
import HeaderDiv from "./HeaderDiv";

const food_list = [
  {
    id: 1,
    category: 'Momo',
    data: ['Chicken Momo', 'Buff Momo', 'Veg Momo', 'Paneer Momo'],
  },
  {
    id: 2,
    category: 'Pizza',
    data: ['Margherita', 'Pepperoni', 'Vegetarian', 'Hawaiian'],
  },
  {
    id: 3,
    category: 'Burger',
    data: ['Cheeseburger', 'Chicken Burger', 'Veggie Burger'],
  },
  {
    id: 4,
    category: 'Ice Cream',
    data: ['Vanilla', 'Chocolate', 'Strawberry', 'Butterscotch'],
  },
  {
    id: 5,
    category: 'Cold Drinks',
    data: ['Coke', 'Pepsi', 'Fanta', 'Sprite'],
  },
];


const FoodList = () => {
  return (
    <View style={styles.container}>
      <HeaderDiv headingText="Foods Section - SectionList Example" />
      <SectionList
      sections={food_list}
      renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
      renderSectionHeader={({section: {category}}) => <Text style={styles.sectionHeader}>{category}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 24,
    fontWeight: 'bold',
    // backgroundColor: 'rgba(247,247,247,1.0)'
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    backgroundColor: 'skyblue'
  },
});

export default FoodList;
