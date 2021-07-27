import React from "react";
import MyPostsContainer from "../myPosts/MyPostsContainer";
import q from './Profile.module.css';
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {

    return (

        <article className={q.profile}>
            <div>
                <ProfileInfo isAuth={props.isAuth} profile={props.profile} status={props.status} updateStatus={props.updateStatus} authorizedUserId={props.authorizedUserId} />
                <MyPostsContainer />
            </div>

        </article>
    )
}
export default Profile;