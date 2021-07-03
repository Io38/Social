import React from 'react';
import q from './Post.module.css';


const Post = (props) => {
    return (
        <div className={q.post}>

            {props.text}
            <div>
                <span>Likes: {props.LikesCount}</span>
            </div>
        </div>
    );
}

export default Post;