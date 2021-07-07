import React from 'react';
import q from './MyPosts.module.css';
import Post from './post/Post';




let newPostElement = React.createRef();

const MyPosts = (props) => {

    let PostsElements = props.PostData.map(el => <Post text={el.text} count={el.count} LikesCount={el.LikesCount} />);


    const postAdd = () => {

        props.dispatch({ type: 'ADD-POST' });
        newPostElement.current.value = props.newPostText;

    }


    let onPostChange = () => {

        let text = newPostElement.current.value;
        props.dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text });
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