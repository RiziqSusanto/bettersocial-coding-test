import React from 'react';
import {
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import IconBlock from '../assets/block.png';
import IconComment from '../assets/comment.png';
import IconDownvoteInactive from '../assets/downvote_inactive.png';
import IconShare from '../assets/share.png';
import IconUpvoteInactive from '../assets/upvote_inactive.png';
import PostDummy from '../assets/data/feed.json';
import {useAppContext} from '../AppContext';

function FeedScreen() {
  const navigation = useNavigation();
  const {state, dispatch} = useAppContext();

  const handleVote = (postId, voteType) => {
    dispatch({
      type: 'UPDATE_VOTE',
      payload: {postId, voteType},
    });
  };

  return (
    <SafeAreaView>
      <FlatList
        data={state.posts}
        renderItem={({item}) => (
          <Pressable
            onPress={() => navigation.navigate('post-detail', {id: item.id})}
            key={item.id}>
            <View>
              <View
                style={{
                  height: 64,
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  source={{
                    uri: item.user.image,
                  }}
                  width={48}
                  height={48}
                  style={{borderRadius: 24, marginLeft: 24}}
                />
                <View style={{marginLeft: 16}}>
                  <Text
                    style={{
                      fontWeight: '600',
                      fontSize: 14,
                      lineHeight: 16.94,
                    }}>
                    {item.user.name}
                  </Text>
                  <Text
                    style={{fontWeight: '400', fontSize: 12, lineHeight: 18}}>
                    {item.post.created_at}
                  </Text>
                </View>
              </View>
              <View style={{height: 0.5, backgroundColor: '#C4C4C4'}} />
              <View>
                <Text
                  style={{
                    marginHorizontal: 24,
                    marginVertical: 5,
                    marginTop: 20,
                  }}
                  numberOfLines={3}>
                  {item.post.description}
                </Text>
                {item.post.description.split(' ').length > 15 && (
                  <Pressable onPress={() => console.log('more')}>
                    <Text
                      style={{
                        marginHorizontal: 24,
                        color: 'blue',
                        marginBottom: 10,
                      }}>
                      More
                    </Text>
                  </Pressable>
                )}
                <Image
                  source={{
                    uri: item.post.post_image,
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
                    {item.post.comments.length}
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
                    {item.post.total_down_vote}
                  </Text>
                  <Pressable onPress={() => handleVote(item.id, 'downvote')}>
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
                    {item.post.total_up_vote}
                  </Text>
                  <Pressable onPress={() => handleVote(item.id, 'upvote')}>
                    <Image
                      source={IconUpvoteInactive}
                      height={18}
                      width={18}
                      style={{marginRight: 22}}
                    />
                  </Pressable>
                </View>
              </View>
            </View>
            <View style={{height: 4, backgroundColor: '#C4C4C4'}} />
          </Pressable>
        )}
      />
    </SafeAreaView>
  );
}

export default FeedScreen;
