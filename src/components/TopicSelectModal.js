import React from 'react';
import database from '@react-native-firebase/database';
import { View, Text, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { topicModal } from './styles';
import { Input, Button } from './'
import { useState } from 'react';
import { useEffect } from 'react';

let topics = [];

const TopicSelectModal = (props) => {

  const [filteredTopic, setFilteredTopic] = useState([...topics]);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    database()
      .ref()
      .once('value')
      .then((snapshot) => {
        topics = Object.keys(snapshot.val());
        setFilteredTopic(topics);
      });
  }, [])

  const searchTopic = (value) => {
    setFilteredTopic(topics.filter((topic) => topic.toLowerCase().includes(value.toLowerCase())));
    setTyped(value);s
  }


  return (
    <Modal
      isVisible={props.visibility}
      style={topicModal.modal}
      onBackdropPress={props.onClose}
    >
      <View style={topicModal.container}>
        {filteredTopic.map((topic, i) => {
          return (
            <TouchableOpacity
              key={i}
              style={topicModal.topicItemContainer}
              onPress={() => props.onTopicSelect(topic)}
            >
              <Text style={topicModal.topicItemText}> #{topic} </Text>
            </TouchableOpacity>
          )
        })}
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "flex-end" }}>
          <View style={{ flex: 1 }}>
            <Input placeholder="Search topic.." onType={searchTopic} />
          </View>
          <Button title="new Topic" onPress={()=>props.onTopicSelect(typed)} />
        </View>
      </View>
    </Modal>
  );
};

export { TopicSelectModal };
