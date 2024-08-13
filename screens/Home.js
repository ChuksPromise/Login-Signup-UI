import { useNavigation } from "@react-navigation/native";
import React from "react";
import PrimaryButton from "../components/PrimaryButton";
import SecondaryButton from "../components/secondaryButton";
import { StyleSheet, View, Text, Image } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.LandingPix}>
        <AntDesign name="login" size={200}/>
        
      </View>
      {/* <View style={{ width: "100%", height: 530 }}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={require("../assets/img/background2.png")} // Local image in the project
        />
      </View> */}
      {/* <Image source={require('../assets/img/bikee.jpg')} /> */}
      {/* <Image
            source={{ uri: 'https://www.freepik.com/free-vector/mobile-login-concept-illustration_4957136.htm#fromView=search&page=1&position=0&uuid=bd364dd7-185d-4c54-a16b-e1dd1278911f' }} // URL of the image
            style={styles.image}
         /> */}
      <View style={styles.LocalSection}>
        <MaterialCommunityIcons
          name="map-marker-radius-outline"
          size={40}
          color="black"
        />
        <Text style={styles.LocalText}>Localshop</Text>
      </View>
      <View style={styles.onePlace}>
        <Text style={styles.onePlaceText}>
          Everything you need is in one place
        </Text>
      </View>
      <View>
        <Text style={styles.shopText}>
          Find your daily necessities at Brand. The world's largest fahion
          e-commerce has arrived in a mobile shop now!
        </Text>
      </View>
      <View>
        <PrimaryButton onPress={() => navigation.navigate("..")}>
          Login
        </PrimaryButton>
        <SecondaryButton onPress={() => navigation.navigate("...")}>
          Register
        </SecondaryButton>
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: "white",
  },
  LandingPix: {
    justifyContent: "center",
    alignItems: "center",
    fontSize: "50px",
  },
  LocalSection: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    fontSize: 30,
    marginTop: 5,
    marginBottom: 5,
  },
  LocalText: {
    fontSize: 30,
  },
  onePlace: {
    marginTop: 5,
    marginBottom: 5,
  },
  onePlaceText: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "left",
  },
  shopText: {
    fontSize: 20,
    color: "#656A6E",
    marginTop: 5,
    marginBottom: 10,
  },
});
