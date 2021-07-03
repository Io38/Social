import React from 'react';
import q from './MyPosts.module.css';






const MyPosts = (props) => {
    return (

        <div className={q.my_posts}>

            <textarea></textarea>
            <button>Post</button>

            {props.PostsElements}


        </div>
    );
}

export default MyPosts;