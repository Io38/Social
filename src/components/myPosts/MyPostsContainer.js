import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../redux/profile-reducer';
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {


    const postAdd = () => {

        let action = addPostActionCreator();
        props.dispatch(action);

    }


    let updateNewPostText = (text) => {

        let action = updatePostTextActionCreator(text);
        props.dispatch(action);
    }

    return (<MyPosts
        updateNewPostText={updateNewPostText}
        postAdd={postAdd}
        PostData={props.store.getState().profile.PostData} />);
}

export default MyPostsContainer;