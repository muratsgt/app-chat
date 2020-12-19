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

  const [postList, setPostList] = useState([]);
  const [topicModalFlag, setTopicModalFlag] = useState(true);
  const [selectedTopic, setSelectedTopic] = useState("");


  const selectTopic = (value) => {
    database().ref(`/${selectedTopic}/`).off('value');

    setSelectedTopic(value);
    setTopicModalFlag(false);

    database()
      .ref(value)
      .on('value', (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const keyValues = Object.keys(data);
          const formattedData = keyValues.map(key => ({ ...data[key] }))
          formattedData.sort((a, b) => {
            return new Date(b.time) - new Date(a.time);
          });
          setPostList(formattedData);
        } else { setPostList([]) }
      })
    // databasede guncelleme olunca fonksiyonu otomatik yeniler
  }

  const logOut = () => {
    auth().signOut();
    database().ref().off('value');
  }

  const sendPost = (value) => {
    const postObject = {
      email: user.email,
      postText: value,
      time: moment().toISOString()
    }
    database().ref(selectedTopic + "/").push(postObject);
  }

  const renderPost = ({ item }) => <PostItem post={item} />

  const onTopicModal = () => {
    setTopicModalFlag(true);
  }

  return (
    <SafeAreaView style={timelinePage.container}>
      <View style={timelinePage.container}>
        <Header
          onTopicModalSelect={onTopicModal}
          onLogOut={logOut}
          title={selectedTopic}
        />
        <FlatList
          data={postList}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderPost}
          ListEmptyComponent={() => null}
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
