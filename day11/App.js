import { View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/components/Home";
import GoBack from "./src/components/GoBack";
import FoodList from "./src/components/FoodList";
import GetAPIData from "./src/components/GetAPIData";
import PressableButtons from "./src/components/PressableButtons";

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={Home} />           
        <Stack.Screen name="GoBack" component={GoBack} />
        <Stack.Screen name="SectionList" component={FoodList} />
        <Stack.Screen name="GetAPIData" component={GetAPIData} />
        <Stack.Screen name="PressableButtons" component={PressableButtons} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


