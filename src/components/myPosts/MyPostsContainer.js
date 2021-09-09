import { connect } from 'react-redux';
import {addPostActionCreator, like, updatePostTextActionCreator} from '../../redux/profile-reducer';
import MyPosts from './MyPosts';




const mapStateToProps = (state) => {

    return {
        PostData: state.profile.PostData,
        newPostText: state.profile.newPostText,
        profile: state.profile.profile,
        authorizedUserId: state.auth.userId
    };
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
        },
        like:(count,likesNumber) =>{
            let action = like(count,likesNumber);
            dispatch(action);
        }
    }
}
let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsContainer;