import React from 'react';
// import database from '@react-native-firebase/database';
import {
  SafeAreaView,
  Dimensions,
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Alert
} from 'react-native';

import { authStyle } from './styles';
import { Input, Button } from '../components';
import auth from '@react-native-firebase/auth';
import { useState } from 'react';
import { resolveAuthError } from "../functions"

const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser() {
    try {
      if (email === "" || password === "") {
        Alert.alert("Clarus Chat", resolveAuthError("auth/null"));
      } else {
        await auth().signInWithEmailAndPassword(email, password);
        alert("Login Succesfull!");
        props.navigation.navigate("Timeline");
      }
    } catch (error) {
      Alert.alert("Clarus Chat", resolveAuthError(error.code))
    }

    // if (email === "" || password === "") {
    //   Alert.alert("Clarus Chat", resolveAuthError("auth/null"))
    // }
    // else {
    //   auth()
    //     .signInWithEmailAndPassword(email, password)
    //     .then(() => alert("Login Succesfull!"))
    //     .catch((err) => Alert.alert("Clarus Chat", resolveAuthError(err.code)));
    // }
  }

  // async function getit () {
  //   const bbb = await database().getServerTime().getTime().toString();
  //   console.log("BBB is : " + bbb)
  //   const snap = await database().ref().once('value');
  //   console.log("snap is : " + snap.val())
  // }

  // getit();


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#cfd8dc' }}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <View style={authStyle.container}>
            <Image
              style={authStyle.logo}
              source={require("../assets/logo.jpeg")}
            />
            <Text style={authStyle.logoText}>CLARUS CHAT</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Input
              inputProps={{
                placeholder: "Type your email address..",
                keyboardType: "email-address"
              }}
              onType={(value) => setEmail(value)}
            />
            <Input
              inputProps={{
                placeholder: "Type your password..",
                secureTextEntry: true
              }}
              onType={(value) => setPassword(value)}
            />

            <Button title="Sign In" onPress={loginUser} />
            <Button title="Sign Up" noBorder onPress={() => props.navigation.navigate("Sign")} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export { Login };
