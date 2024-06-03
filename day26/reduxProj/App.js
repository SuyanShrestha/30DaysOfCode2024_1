import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Header from "./components/Header";
import Product from "./components/Product";
import { ScrollView } from "react-native";
import { Provider } from "react-redux";
import store from "./components/redux/store";

export default function App() {
  const products = [
    {
      name: "Samsung Galaxy S21",
      color: "Black",
      price: 30000,
      image:
        "https://i5.walmartimages.com/asr/dcf28e36-4c71-49d1-931b-4649b866db89.22d7e2d5e09fe373b2541876b509ebfb.jpeg",
    },
    {
      name: "Apple iPhone 12",
      color: "Black",
      price: 120000,
      image: "https://m.media-amazon.com/images/I/41xrOzoHI8L._AC_.jpg",
    },
    {
      name: "Redmi Note 10 Pro",
      color: "Green",
      price: 36000,
      image: "https://m.media-amazon.com/images/I/51NfdBaU3qL._AC_SL1000_.jpg",
    },
    {
      name: "OnePlus 9 Pro",
      color: "Coffee Brown",
      price: 100000,
      image: "https://fdn2.gsmarena.com/vv/bigpic/oneplus-9-pro-.jpg",
    },
    {
      name: "Google Pixel 5",
      color: "Light Gray",
      price: 80000,
      image: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-5-5g.jpg",
    },
  ];

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <ScrollView>
          <Header />
          {products.map((product) => (
            <Product product={product} />
          ))}
        </ScrollView>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A15E49",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});

// export default function AppRedux() {
//   return (
//     <Provider store={store}>
//       <App />
//     </Provider>
//   );
// }
