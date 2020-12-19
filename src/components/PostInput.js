import React from 'react';
import { useRef } from 'react';
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { post_input } from './styles';

const PostInput = (props) => {
  const [postText, setPostText] = React.useState('');
  const inpElem = useRef();

  const pressed = () => {
    props.onSendPost(postText);
    inpElem.current.clear();
  }

  return (
    <View style={post_input.container}>
      <View style={post_input.inputContainer}>
        <TextInput
          multiline
          placeholder="Type something.."
          onChangeText={(value) => setPostText(value)}
          ref = {inpElem}
        />
      </View>
      <TouchableOpacity
        style={{ justifyContent: "center" }}
        onPress={pressed}>
        <Icon
          name="telegram"
          size={40}
          color="#1F97E7"
        />
      </TouchableOpacity>
    </View>
  );
};

export { PostInput };
