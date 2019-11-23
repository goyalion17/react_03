import React from 'react';
import {addPostActionCreater, updateNewPostTextActionCreater} from '../redux/profilePage-reducer';
import MyPosts from './MyPosts';
import StoreContext from './../../StoreContext';

const MyPostsContainer = (props) => {
    return (
      <StoreContext.Consumer>
        {(store) => {
          let onAddPost = () => {
            store.dispatch(addPostActionCreater())
          }
        
          let onPostChange = (text) => {
            let action = updateNewPostTextActionCreater(text);
            store.dispatch(action);
          }
          let state = store.getState();
          return <MyPosts updateNewPostText={onPostChange}
            addPost={onAddPost}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText} />
          }
        }
      </StoreContext.Consumer>
  )
}

export default MyPostsContainer;