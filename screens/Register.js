import React from "react";
import { useNavigation } from "@react-navigation/native";
import PrimaryButton from "../components/PrimaryButton";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";

const Register = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <MaterialCommunityIcons
          name="map-marker-radius-outline"
          size={80}
          style={styles.loginhead}
        />
      </View>
      <View>
        <Text style={styles.loginbig}>Register</Text>
        <Text style={styles.loginsmall}>Enter Your Personal Information</Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.thelabel}>Username</Text>
        <View style={styles.inputandicon}>
          <TextInput
            keyboardType='default'
            placeholder="Enter your name"
            style={styles.theinput}
          />
        </View>
        <Text style={styles.thelabel}>Email</Text>
        <View style={styles.inputandicon}>
          <TextInput
            keyboardType="email-address"
            placeholder="Enter your email"
            style={styles.theinput}
          />
        </View>
        <Text style={styles.thelabel}>Password</Text>
        <View style={styles.inputandicon}>
          <TextInput
            keyboardType="visible-password"
            placeholder="Enter password"
            style={styles.theinput}
          />
          <FontAwesome5 name="eye" size={20} />
        </View>
        <Text style={styles.thelabel}>Confirm Password</Text>
        <View style={styles.inputandicon}>
          <TextInput
            keyboardType="visible-password"
            placeholder="Enter confirm password"
            style={styles.theinput}
          />
          <FontAwesome5 name="eye" size={20} />
        </View>
      </View>
      <PrimaryButton>Register</PrimaryButton>
      
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: "white",
  },
  loginhead: {
    textAlign: "center",
    width: "auto",
    marginBottom: 20,
  },
  loginbig: {
    marginTop: 10,
    marginBottom: 5,
    fontSize: 35,
    fontWeight: "bold",
  },
  loginsmall: {
    marginTop: 5,
    marginBottom: 10,
    fontSize: 20,
    color: "#656A6E",
  },
  form: {
    // backgroundColor: "red",
    marginBottom: 20,
  },
  thelabel: {
    fontSize: 22,
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 10,
  },
  inputandicon: {
    backgroundColor: "#edf3ff",
    padding: 15,
    paddingLeft: 20,
    borderRadius: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "gray",
    marginBottom: 10
  },
  theinput: {
    fontSize: 20,
    width: "80%",
  },
  forgetPass: {
    textAlign: "right",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    color: "#656A6E",
    fontWeight: "600",
  },
  loginOption: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    color: "#656A6E",
  },
});
