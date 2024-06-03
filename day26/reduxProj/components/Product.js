import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Touchable } from "react-native";
import { TouchableOpacity } from "react-native";
import { addToCart } from "./redux/action";
import { useDispatch } from "react-redux";

const Product = (props) => {
  const product = props.product;
  const dispatch = useDispatch();

  // button onPress
  const handleAddToCart = (product) => {
    // console.warn("added to cart", product);
    dispatch(addToCart(product));  // dispatching action
  };

  return (
    <View style={styles.productItem}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={[{ fontSize: 20 }, styles.text]}>{product.name}</Text>
      <Text style={[{ fontSize: 16 }, styles.text]}>NRS {product.price}</Text>
      <Text style={[{ fontSize: 16 }, styles.text]}>{product.color}</Text>

      {/* add to cart button */}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => handleAddToCart(product)}
      >
        <Text style={styles.btnText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    backgroundColor: "#BFC0C0",
    padding: 20,
    margin: 10,
    borderRadius: 10,
    width: 300,
    alignItems: "center",
  },
  btn: {
    backgroundColor: "#5E4AE3",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 2,
    marginTop: 10,
    width: 200,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
  text: {
    color: "#0D2818",
    // alignSelf: "flex-start",
  },
  image: { 
    width: 200,
    height: 200,
    resizeMode: "contain",
    marginBottom: 10 
  },
});

export default Product;
