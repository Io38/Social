import React from 'react';
import q from './MyPosts.module.css';
import Post from './post/Post';




let newPostElement = React.createRef();

const MyPosts = (props) => {
    let PostsElements = props.PostData.map(el => <Post text={el.text} count={el.count} LikesCount={el.LikesCount} />);

    const postAdd = () => {

        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = "";
    }
    return (

        <div className={q.my_posts}>



            <textarea ref={newPostElement}></textarea>
            <button onClick={postAdd}>Post</button>

            {PostsElements}


        </div>
    );
}

export default MyPosts;