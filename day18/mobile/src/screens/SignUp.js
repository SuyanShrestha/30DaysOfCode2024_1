import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import Loading from "../components/loading";
import { updateProfile } from "firebase/auth";
import { useNavigation } from "@react-navigation/native";

const SignUp = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [countryCode, setCountryCode] = useState("+977");

  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    // check if all fields are filled
    if (!username || !email || !password || !confirmPassword || !phoneNumber) {
      Alert.alert("All fields are required");
      return;
    }

    // check if password and confirm password match
    if (password !== confirmPassword) {
      Alert.alert("Passwords do not match");
      window.alert("Passwords do not match");
      setConfirmPassword("");
      return;
    }

    setLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (response.user) {
        await updateProfile(FIREBASE_AUTH.currentUser, {
          displayName: username,
        });
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <View style={styles.imgContainer}>
        <Text>swaadsansaar</Text>
        <Image
          source={require("../../assets/images/signup_pic.png")}
          style={styles.image}
        />
      </View>

      <View>
        <TextInput
          style={styles.input}
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
          selectionColor="#374151"
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          selectionColor="#374151"
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
          selectionColor="#374151"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          selectionColor="#374151"
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
          selectionColor="#374151"
        />
        {loading ? (
          <Loading size="large" className="mt-20" />
        ) : (
          <>
            <TouchableOpacity style={styles.signup_btn} onPress={signUp}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            {/* <Button title="Sign Up" onPress={signUp} /> */}
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.loginText}>
                Already have an account? Login
              </Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

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
  loginText: {
    textAlign: "center",
    color: "#D1495B",
    marginTop: 15,
  },

  image: {
    width: 150,
    height: 150,
    // marginBottom: 20,
    alignSelf: "flex-end",
  },

  signup_btn: {
    backgroundColor: "#D1495B",
    padding: 10,
    alignItems: "center",
    borderRadius: 30,
    marginTop: 10,
    width: "40%",
    alignSelf: "center",
    
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  imgContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // marginBottom: 20,
  },
});

export default SignUp;
