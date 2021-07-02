import React from "react";
import MyPosts from "../myPosts/MyPosts";
import q from './Profile.module.css';

const Profile = () => {

    return (
        <article className={q.profile}>

            <div>

                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    alt="Error 404 " className={q.avatar} ></img>
                Name Sirname<br />
                description<br />
                Posts:<br /><br /><br /><br /><br />

                <MyPosts />
            </div>

        </article>
    )
}
export default Profile;