import React, {useState} from 'react';
import {
  Button,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';

import IconBack from '../assets/back.png';
import IconBlock from '../assets/block.png';
import IconComment from '../assets/comment.png';
import IconDownvoteActive from '../assets/downvote_active.png';
import IconDownvoteInactive from '../assets/downvote_inactive.png';
import IconShare from '../assets/share.png';
import IconUpvoteActive from '../assets/upvote_active.png';
import IconUpvoteInactive from '../assets/upvote_inactive.png';
import {useAppContext} from '../AppContext';

function PostDetailScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const {id} = route.params;
  const {state, dispatch} = useAppContext();
  const data = state.posts.find(it => it.id === id);
  const [commentText, setCommentText] = useState('');

  const handleVote = (postId, voteType) => {
    dispatch({
      type: 'UPDATE_VOTE',
      payload: {postId, voteType},
    });
  };

  const handleComment = () => {
    const newComment = {
      id: data.post.comments.length + 1,
      user: {
        image: 'https://picsum.photos/200',
        name: 'UCUP',
      },
      text: commentText,
    };

    dispatch({
      type: 'ADD_COMMENT',
      payload: {id: data.id, comment: newComment},
    });

    setCommentText('');
  };

  const renderComment = ({item}) => (
    <>
      <View
        style={{
          flexDirection: 'row',
          minHeight: 72,
          paddingVertical: 16,
          paddingHorizontal: 24,
        }}>
        <Image
          source={{
            uri: item.user.image,
          }}
          width={36}
          height={36}
          style={{borderRadius: 24, marginRight: 16}}
        />
        <View style={{width: '90%'}}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 12,
              lineHeight: 14.52,
              color: '#828282',
            }}>
            {item.user.name}
          </Text>
          <Text
            style={{
              fontWeight: '400',
              fontSize: 16,
              lineHeight: 19.36,
            }}>
            {item.text}
          </Text>
        </View>
      </View>
      <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
    </>
  );

  return (
    <SafeAreaView>
      <FlatList
        data={data.post.comments}
        renderItem={renderComment}
        keyExtractor={item => item.id.toString()}
        ListHeaderComponent={
          <>
            <View
              style={{
                height: 64,
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <Pressable onPress={() => navigation.goBack()}>
                <Image
                  source={IconBack}
                  height={18}
                  width={18}
                  style={{marginLeft: 22}}
                />
              </Pressable>
              <Image
                source={{
                  uri: data.user.image,
                }}
                width={48}
                height={48}
                style={{borderRadius: 24, marginLeft: 24}}
              />
              <View style={{marginLeft: 16}}>
                <Text
                  style={{fontWeight: '600', fontSize: 14, lineHeight: 16.94}}>
                  {data.user.name}
                </Text>
                <Text style={{fontWeight: '400', fontSize: 12, lineHeight: 18}}>
                  {data.post.created_at}
                </Text>
              </View>
            </View>
            <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
            <View>
              <Text style={{margin: 24}}>{data.post.description}</Text>
              <Image
                source={{
                  uri: data.post.post_image,
                }}
                height={200}
              />
            </View>
            <View
              style={{
                height: 52,
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  flex: 1,
                }}>
                <Image
                  source={IconShare}
                  height={18}
                  width={18}
                  style={{marginLeft: 22}}
                />
                <Image
                  source={IconComment}
                  height={18}
                  width={18}
                  style={{marginLeft: 24}}
                />
                <Text
                  style={{
                    width: 24,
                    marginHorizontal: 4,
                    textAlign: 'center',
                  }}>
                  {data.post.comments.length}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                  }}>
                  {data.post.total_down_vote}
                </Text>
                <Pressable onPress={() => handleVote(data.id, 'downvote')}>
                  <Image
                    source={IconDownvoteInactive}
                    height={18}
                    width={18}
                    style={{marginLeft: 24}}
                  />
                </Pressable>
                <Text
                  style={{
                    width: 24,
                    marginHorizontal: 11,
                    textAlign: 'center',
                  }}>
                  {data.post.total_up_vote}
                </Text>
                <Pressable onPress={() => handleVote(data.id, 'upvote')}>
                  <Image
                    source={IconUpvoteInactive}
                    height={18}
                    width={18}
                    style={{marginRight: 22}}
                  />
                </Pressable>
              </View>
            </View>
            <View style={{height: 4, backgroundColor: '#C4C4C4'}} />
          </>
        }
      />
      <View
        style={{
          position: 'absolute',
          bottom: 20,
          height: 60,
          flexDirection: 'row',
          alignItems: 'center',
          width: '100%',
          paddingHorizontal: 24,
          zIndex: 10,
        }}>
        <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
        <TextInput
          placeholder="Enter Comment"
          style={{flex: 1}}
          value={commentText}
          onChangeText={setCommentText}
        />
        <Button title="Comment" onPress={handleComment} />
      </View>
    </SafeAreaView>
  );
}

export default PostDetailScreen;
