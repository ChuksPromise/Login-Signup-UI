import React from 'react'
import { useNavigation } from "@react-navigation/native";
import PrimaryButton from '../components/PrimaryButton';
import { StyleSheet,Text,TextInput,View } from 'react-native';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';


const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <MaterialCommunityIcons name='map-marker-radius-outline' size={80} style={styles.loginhead} />
      </View>
      <View>
        <Text style={styles.loginbig}>
          Login
        </Text>
        <Text style={styles.loginsmall}>
          Login to continue using the app
        </Text>
      </View>
      <View style={styles.form}>
        <Text style={styles.thelabel} >
          Email
        </Text>
        <View style={styles.inputandicon}>
          <TextInput keyboardType='email-address' placeholder='Enter your email' style={styles.theinput}/>
        </View>
        <Text style={styles.thelabel} >
          Password
        </Text>
        <View style={styles.inputandicon}>
          <TextInput keyboardType='visible-password' placeholder='Enter password' style={styles.theinput}/>
          <FontAwesome5 name='eye' size={20}/>
        </View>
      </View>
      <View>
        <Text style={styles.forgetPass}>
          Forget Password?
        </Text>
      </View>
      <PrimaryButton>
         Login 
      </PrimaryButton>
      <View>
        <Text style={styles.loginOption}>
          Or Login With
        </Text>
      </View>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: 'white'
  },
  loginhead:{
    textAlign: 'center',
    width: 'auto',
    marginBottom: 20
  },
  loginbig:{ 
    marginTop: 10,
    marginBottom: 5,
    fontSize: 35,
    fontWeight: "bold"
  },
  loginsmall:{ 
    marginTop: 5,
    marginBottom: 10,
    fontSize: 20,
    color: "#656A6E",
  },
  form:{
    // backgroundColor: "red",
    marginBottom: 5
  },
  thelabel:{
    fontSize: 22,
    fontWeight: "600",
    marginTop: 10,
    marginBottom: 10
  },
  inputandicon:{
    backgroundColor: "#edf3ff",
    padding: 15,
    paddingLeft: 20,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    marginBottom: 10
  },
  theinput:{
    fontSize: 20,
    width: '80%'
  },
  forgetPass:{
    textAlign: 'right',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    color: "#656A6E",
    fontWeight: "600"
  },
  loginOption:{
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontSize: 20,
    color: "#656A6E",
  }
})