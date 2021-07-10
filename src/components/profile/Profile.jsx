import React from "react";
import MyPostsContainer from "../myPosts/MyPostsContainer";
import q from './Profile.module.css';
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {

    return (
        <article className={q.profile}>
            <div>
                <ProfileInfo />
                <MyPostsContainer />
            </div>

        </article>
    )
}
export default Profile;