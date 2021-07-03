import React from 'react';
import q from './MyPosts.module.css';
import Post from './post/Post';


let PostData = [
    { count: "1", text: "second post", LikesCount: "123" },
    { count: "1", text: "My first post", LikesCount: "0" },
    { count: "1", text: "My first post", LikesCount: "0" },
    { count: "1", text: "My first post", LikesCount: "0" },
    { count: "1", text: "My first post", LikesCount: "0" },

];


let PostsElements = PostData.map(el => <Post text={el.text} count={el.count} LikesCount={el.LikesCount} />);


const MyPosts = () => {
    return (

        <div className={q.my_posts}>

            <textarea></textarea>
            <button>Post</button>

            {PostsElements}


        </div>
    );
}

export default MyPosts;