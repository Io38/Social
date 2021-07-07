import React from "react";
import MyPosts from "../myPosts/MyPosts";
import q from './Profile.module.css';
import ProfileInfo from "./ProfileInfo";

const Profile = (props) => {

    return (
        <article className={q.profile}>
            <div>
                <ProfileInfo />
                <MyPosts PostData={props.PostData}
                    PostsElements={props.PostsElements}
                    newPostText={props.newPostText}
                    dispatch={props.dispatch} />
            </div>

        </article>
    )
}
export default Profile;