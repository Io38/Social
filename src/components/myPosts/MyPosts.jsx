import React from 'react';
import q from './MyPosts.module.css';
import Post from './post/Post';

const MyPosts = () => {
    return (
        <div className={q.my_posts}>

            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />

        </div>
    );
}

export default MyPosts;