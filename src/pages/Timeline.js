import React from 'react';
import database from '@react-native-firebase/database';
import { SafeAreaView, View, Text, FlatList } from 'react-native';
import auth from "@react-native-firebase/auth";
import moment from 'moment';

import { timelinePage } from './styles';
import { PostItem, PostInput, Header, TopicSelectModal } from '../components';
import { useState } from 'react';

const Timeline = () => {
  const user = auth().currentUser;

  const [topicModalFlag, setTopicModalFlag] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState("");

  const selectTopic = (value) => {
    setSelectedTopic(value);
    setTopicModalFlag(false);

    database()
      .ref()
      .on('value', (snapshot) => {
        console.log(snapshot.val())
      })
      // databasede guncelleme olunca fonksiyonu otomatik yeniler
  }

  const logOut = () => {

  }

  const sendPost = (value) => {
    const postObject = {
      userMail : user.email,
      postText : value,
      time : moment().toISOString()
    }
    database().ref(selectedTopic + "/").push(postObject);
  }

  return (
    <SafeAreaView style={timelinePage.container}>
      <View style={timelinePage.container}>
        <Header
          onTopicModalSelect={() => setTopicModalFlag(true)}
          onLogOut={logOut}
          title={selectedTopic}
        />
        <FlatList
          data={[]}
          renderItem={() => null}
        />
        <PostInput onSendPost={sendPost} />

        <TopicSelectModal
          visibility={topicModalFlag}
          onClose={() => selectedTopic ? setTopicModalFlag(false) : null}
          onTopicSelect={selectTopic}
        />
      </View>
    </SafeAreaView>
  );
};

export { Timeline };
