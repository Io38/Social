import React, {useState} from 'react';
import q from './Post.module.css';
import defaultAva from "../../../assets/photo.png";


const Post = (props) => {



    const onLikesClick = (count,likesNumber) => {

        props.like(count,likesNumber)
    }

    return (
        <div className={q.post}>


            <div className={q.profile}>

                <img src={!props.profile.photos.large ? defaultAva : props.profile.photos.large} alt=""/>
                <span>{props.profile.fullName}</span>

            </div>


            <div className={q.postText}>
                {props.text}
            </div>


            <div className={q.likes} onClick={() => {onLikesClick(props.count,props.LikesCount)}
            }>
                <span> Likes: {props.LikesCount}</span>
            </div>


        </div>
    );
}

export default Post;