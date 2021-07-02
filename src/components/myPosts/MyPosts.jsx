import React from 'react';
import q from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = () => {
    return (
        <div className={q.my_posts}>
            <textarea></textarea>
            <button>Post</button>
            <Post text="first message" />
            <Post text="second message" />
            <Post text="third message" />


        </div>
    );
}

export default MyPosts;