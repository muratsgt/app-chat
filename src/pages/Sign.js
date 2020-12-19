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
import { validateNewInputs } from '../functions';

const Sign = (props) => {
  // daha az state ile ?
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  function signUp() {

    if (validateNewInputs(email, password, password2)) {
      auth()
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          props.navigation.goBack();
        })
        .catch((err) => Alert.alert("Clarus Chat", "An error occured!"));
    }

  }

  return (
    <View style={{ flex: 1 }}>
      <View style={authStyle.maincontainer}>
        <ScrollView contentContainerStyle={{ flex: 1 }}>
          <View style={authStyle.container}>
            <Image
              style={authStyle.logo}
              source={require("../assets/logo.png")}
            />
            <Text style={authStyle.logoText}>roomy</Text>
            <Text style={authStyle.logoDesc}>simply chat</Text>
          </View>
          <View style={{ flex: 1 }}>

            <Input
              inputProps={{
                placeholder: "Type your e-mail address..",
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
            <Input
              inputProps={{
                placeholder: "Type your password again..",
                secureTextEntry: true
              }}
              onType={(value) => setPassword2(value)}
            />
            <Button title="Create account" onPress={signUp} />
            <Button title="Cancel" noBorder onPress={() => props.navigation.goBack()} />
          </View>

        </ScrollView>
      </View>
    </View>
  );
};

export { Sign };
