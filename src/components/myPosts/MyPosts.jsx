import React from 'react';
import q from './MyPosts.module.css';
import Post from './post/Post';






const MyPosts = (props) => {
    let PostsElements = props.PostData.map(el => <Post text={el.text} count={el.count} LikesCount={el.LikesCount} />);
    return (

        <div className={q.my_posts}>



            <textarea></textarea>
            <button>Post</button>

            {PostsElements}


        </div>
    );
}

export default MyPosts;