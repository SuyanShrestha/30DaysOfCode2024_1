import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  Image,
  TextInput,
  ScrollView
} from "react-native";


export default function App() {
  const [count, setCount] = useState(0);

  const [number, onChangeNumber] = useState("");
  const [name, onChangeName] = useState("");

  const increaseCount = () => {
    setCount((count) => count + 1);
  };

  const decreaseCount = () => {
    if (count <= 0) return 0;
    setCount((count) => count - 1);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Text>Hi</Text>

      {/* VIEW 1 */}
      <View style={[styles.container1, {textAlign: 'center'}]}>
        <Text>View 1</Text>

        <View style={[{ display: "flex" }, styles.countContainers]}>
          <Image
            style={styles.imageStyle}
            source={require("./assets/adaptive-icon.png")}
          />
          <Image
            style={styles.imageStyle}
            source={{
              uri: "https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            }}
          />
        </View>

        <View style={[{ display: "flex", alignItems: 'space-around'}, styles.countContainers]}>
          <TextInput
            value={number}
            placeholder="Enter your number"
            onChangeText={onChangeNumber}
            style={styles.textInput}
          />
          <TextInput
            value={name}
            placeholder="Enter your name"
            onChangeText={onChangeName}
            style={styles.textInput}
          />
        </View>
      </View>

      {/* VIEW 2 */}
      <View style={styles.container2}>
        <View>
          <Text style={{ color: "#fff" , textAlign: 'center'}}>View 2</Text>
          <Text style={styles.countContainer}>Count: {count}</Text>
          <View style={[{ display: "flex" }, styles.countContainers]}>
            <TouchableOpacity
              onPress={increaseCount}
              style={[{ backgroundColor: "grey" }, styles.button]}
            >
              <Text>Add Count</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={decreaseCount}
              style={[{ backgroundColor: "grey" }, styles.button]}
            >
              <Text>Remove Count</Text>
            </TouchableOpacity>
          </View>
        </View>

        <ScrollView style={styles.scrollView}>
          <Text>
          Yeah, I'm out the way, yeah, I'm low, okay Yeah, the island right
          here's remote, okay I ain't thinkin' about no reaper Nigga, I'm
          reapin' what I sow, okay Got a Benjamin and a Jackson all in my house
          like I'm Joe, okay Hellcat, made his homeboys and them type sell they
          soul, okay Everybody wanna be demon 'til they get chipped by your
          throwaway And I might do a show a day, once a lame, always a lame Oh,
          you thought the money, the power or fame would make you go away?
          </Text>
        </ScrollView>
      </View>

      {/* <View style={styles.container3}>

      </View> */}

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  container1: {
    flex: 1,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: "center",
  },

  container2: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
    gap: 10,
  },

  countContainer: {
    backgroundColor: "white",
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 10,
  },

  countContainers: {
    flexDirection: "row",
    gap: 20,
  },

  imageStyle: {
    width: 100,
    height: 200,
    marginVertical: 10,
    borderRadius: 20,
  },

  textInput: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
  },

  scrollView: {
    height: 200,
    width: 100,
    backgroundColor: 'lime'
  },

  button: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 10
  },

  container3: {
    height: 100,
    width: 100,
    backgroundColor: 'grey',
    flex: 1
  }
});
