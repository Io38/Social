import React from "react";
import MyPosts from "../myPosts/MyPosts";
import MyPostsContainer from "../myPosts/MyPostsContainer";
import q from './Profile.module.css';
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {

    return (
        <article className={q.profile}>
            <div>
                <ProfileInfo />
                <MyPostsContainer
                    store={props.store}
                    dispatch={props.dispatch} />
            </div>

        </article>
    )
}
export default Profile;