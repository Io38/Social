import React from 'react';
import q from './Post.module.css';


const Post = (props) => {
    return (
        <div className={q.post}>

            {props.text}

        </div>
    );
}

export default Post;