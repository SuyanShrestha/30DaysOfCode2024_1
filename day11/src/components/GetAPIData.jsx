import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import HeaderDiv from "./HeaderDiv";
import GoBack from "./GoBack";
import { ScrollView } from "react-native";

const GetAPIData = ({ navigation }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const URL = "https://jsonplaceholder.typicode.com/posts";
    const response = await fetch(URL);
    const result = await response.json();
    setData(result);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <HeaderDiv headingText="Get API data" />

      <ScrollView>
        {data.length
          ? data
              .filter((item) => item.userId <= 5)
              .map((item) => {
                return (
                  <View key={item.id} style={styles.dataDiv}>
                    <Text>UserID: {item.userId}</Text>
                    <Text>ID: {item.id}</Text>
                    <Text>Title: {item.title}</Text>
                    <Text>Body: {item.body}</Text>
                  </View>
                );
              })
          : null}

        {data.length ? (
            <FlatList 
            data={data.filter((item) => item.userId > 5)}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
                <View style={styles.dataDiv}>
                    <Text>UserID: {item.userId}</Text>
                    <Text>ID: {item.id}</Text>
                    <Text>Title: {item.title}</Text>
                    <Text>Body: {item.body}</Text>
                </View>
            )}
            />
            ) : null}
      </ScrollView>

      <GoBack navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  dataDiv: {
    padding: 10,
    margin: 10,
    backgroundColor: "#ccc",
    borderBottomWidth: 2,
    borderColor: "#ccc",
    // borderRadius: 10,
  },
});

export default GetAPIData;
