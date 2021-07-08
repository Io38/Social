import React from 'react';
import { addPostActionCreator, updatePostTextActionCreator } from '../../redux/profile-reducer';
import q from './MyPosts.module.css';
import Post from './post/Post';


const MyPosts = (props) => {

    let newPostElement = React.createRef();
    let PostsElements = props.PostData.map(el => <Post text={el.text} count={el.count} LikesCount={el.LikesCount} />);


    const postAdd = () => {

        let action = addPostActionCreator();
        props.dispatch(action);
        newPostElement.current.value = props.newPostText;

    }


    let onPostChange = () => {

        let text = newPostElement.current.value;
        let action = updatePostTextActionCreator(text);
        props.dispatch(action);
    }

    return (

        <div className={q.my_posts}>

            <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
            <button onClick={postAdd}>Post</button>

            {PostsElements}


        </div>
    );
}

export default MyPosts;