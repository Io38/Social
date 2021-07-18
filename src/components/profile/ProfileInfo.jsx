import React from 'react';
import Preloader from '../../preloader/Preloader';
import q from './ProfileInfo.module.css';
import defaultAva from "../../assets/photo.png"

const ProfileInfo = (props) => {
    if (!props.profile) {

        return <Preloader />
    }
    return (

        <div>
            <div className={q.avatarka}>

                <img src={!props.profile.photos.large ? defaultAva : props.profile.photos.large}
                    alt="Error 404 " className={q.avatar} ></img>
            </div>

            <div>{props.profile.fullName}</div>
            <div>{props.profile.aboutMe}</div>




        </div>
    );

}

export default ProfileInfo;