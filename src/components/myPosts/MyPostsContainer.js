import React from 'react';
import { connect } from 'react-redux';
import { addPostActionCreator, updatePostTextActionCreator } from '../../redux/profile-reducer';
import MyPosts from './MyPosts';




const mapStateToProps = (state) => {

    return { PostData: state.profile.PostData };
}

const mapDispatchToProps = (dispatch) => {
    return {
        postAdd: () => {
            let action = addPostActionCreator();
            dispatch(action);
        },
        updateNewPostText: (text) => {

            let action = updatePostTextActionCreator(text);
            dispatch(action);
        }
    }
}
let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;