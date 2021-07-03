import React from "react";
import MyPosts from "../myPosts/MyPosts";
import q from './Profile.module.css';
import ProfileInfo from "./ProfileInfo";

const Profile = () => {

    return (
        <article className={q.profile}>
            <div>
                <ProfileInfo />
                <MyPosts />
            </div>

        </article>
    )
}
export default Profile;