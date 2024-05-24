import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
} from "react-native";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import Loading from "../components/loading";
import { useNavigation } from "@react-navigation/native";

const Login = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      alert("Logged in successfully!");
    } catch (error) {
      console.log(error);
      alert("Login failed: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  // const signUp = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await createUserWithEmailAndPassword(
  //       auth,
  //       email,
  //       password
  //     );
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image
          source={require("../../assets/images/signup_pic.png")}
          style={styles.image}
        />
        <Text>swaadsansaar</Text>
      </View>

      <KeyboardAvoidingView behavior="padding">
        <TextInput
          value={email}
          style={styles.input}
          placeholder="Email"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
          selectionColor="#374151"
        />
        <TextInput
          secureTextEntry={true}
          value={password}
          style={styles.input}
          placeholder="Password"
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
          selectionColor="#374151"
        />

        {loading ? (
          <Loading size="large" className="mt-20" />
        ) : (
          <>
            <TouchableOpacity style={styles.signin_btn} onPress={signIn}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            {/* <Button title="Sign Up" onPress={signUp} /> */}
            <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
              <Text style={styles.registerText}>
                Create a new account here!
              </Text>
            </TouchableOpacity>
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FDBA74",
    display: "flex",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderRadius: 4,
    marginVertical: 4,
    height: 50,
    // paddingVertical: 1,
    paddingLeft: 15,
    // backgroundColor: "#fff",
    borderColor: "#374151",
  },
  registerText: {
    textAlign: "center",
    color: "#D1495B",
    marginTop: 15,
  },

  signin_btn: {
    backgroundColor: "#D1495B",
    padding: 10,
    alignItems: "center",
    borderRadius: 30,
    marginTop: 10,
    width: "40%",
    alignSelf: "center",
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },

  image: {
    width: 150,
    height: 150,
    // marginBottom: 20,
    alignSelf: "flex-end",
  },

  imgContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: 20,
  },
});
