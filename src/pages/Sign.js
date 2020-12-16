import React from 'react';
import {
  SafeAreaView,
  Dimensions,
  View,
  Text,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

import auth from '@react-native-firebase/auth';
import { authStyle } from './styles';
import { Input, Button } from '../components';
import { useState } from 'react';

const Sign = (props) => {
  // daha az state ile ?
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  function signIn () {
    // gecerli eposta ve sifre kontrolu
    if( password !== password2) {
      Alert.alert("Clarus Chat", "Password do not match")
    } else {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          alert("Sign Up Succesfull!");
          props.navigation.goBack();
        })
        .catch((err) => Alert.alert("Clarus Chat", "An error occured!"));
    }

  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#cfd8dc' }}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <View style={authStyle.container}>
            <Image
              style={authStyle.logo}
              source={require("../assets/logo.jpeg")}
            />
            <Text style={authStyle.logoText}>Clarus Chat</Text>
          </View>
          <View style={{ flex: 1 }}>

            <Input
              inputProps={{
                placeholder: "Type your e-mail address..",
                keyboardType: "email-address"
              }}
              onType = {(value)=> setEmail(value)}
            />
            <Input
              inputProps={{
                placeholder: "Type your password..",
                secureTextEntry: true
              }}
              onType = {(value)=> setPassword(value)}
            />
            <Input
              inputProps={{
                placeholder: "Type your password again..",
                secureTextEntry: true
              }}
              onType = {(value)=> setPassword2(value)}
            />
            <Button title="Create account" onPress={signIn}/>
            <Button title="Cancel" noBorder onPress={()=>props.navigation.goBack()}/>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export { Sign };
