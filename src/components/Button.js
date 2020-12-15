import React from 'react';
import {TouchableOpacity, Text} from 'react-native';

import {button, button_outline} from './styles';

const Button = (props) => {
  const bStyle = props.noBorder ? button_outline : button
  return (
    <TouchableOpacity style={bStyle.container} onPress={props.onPress}>
      <Text style={bStyle.title}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export {Button};
