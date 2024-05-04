import { View, StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/components/Home";
import Details from "./src/components/Details";
import ViewUsers from "./src/components/ViewUsers";
import GoBack from "./src/components/GoBack";

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* navigation.navigate('') ko vitra chahi yo HomeScreen name lekhnu paryo in Home component */}
        <Stack.Screen name="HomeScreen" component={Home} />           
        <Stack.Screen name="DetailsScreen" component={Details} />
        <Stack.Screen name="ViewUsers" component={ViewUsers} />
        <Stack.Screen name="GoBack" component={GoBack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

