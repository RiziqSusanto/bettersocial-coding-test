import React, {createContext, useContext, useReducer} from 'react';
import PostDummy from './assets/data/feed.json';

const initialState = {
  posts: PostDummy,
};

const actions = {
  UPDATE_VOTE: 'UPDATE_VOTE',
  ADD_COMMENT: 'ADD_COMMENT',
};

function appReducer(state, action) {
  switch (action.type) {
    case actions.UPDATE_VOTE:
      const {postId, voteType} = action.payload;
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === postId
            ? {
                ...post,
                post: {
                  ...post.post,
                  total_up_vote:
                    voteType === 'upvote'
                      ? post.post.total_up_vote + 1
                      : post.post.total_up_vote,
                  total_down_vote:
                    voteType === 'downvote'
                      ? post.post.total_down_vote + 1
                      : post.post.total_down_vote,
                },
              }
            : post,
        ),
      };
    case actions.ADD_COMMENT:
      const {id, comment} = action.payload;
      return {
        ...state,
        posts: state.posts.map(post =>
          post.id === id
            ? {
                ...post,
                post: {
                  ...post.post,
                  comments: [...post.post.comments, comment],
                },
              }
            : post,
        ),
      };
    default:
      return state;
  }
}

export const AppContext = createContext();

export function AppProvider({children}) {
  const [state, dispatch] = useReducer(appReducer, initialState);

  return (
    <AppContext.Provider value={{state, dispatch}}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
