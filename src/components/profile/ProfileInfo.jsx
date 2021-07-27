import React from 'react';
import Preloader from '../preloader/Preloader';
import q from './ProfileInfo.module.css';
import defaultAva from "../../assets/photo.png"
import pencil from "../../assets/pencil.png"
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = (props) => {

    if (!props.profile) {

        return <Preloader/>
    }

    return (

        <div className={q.all}>

            <div className={q.avatarka}>

                <img src={!props.profile.photos.large ? defaultAva : props.profile.photos.large}
                     alt="Error 404 " className={q.avatar}>

                </img>
            </div>

            <div className={q.description}>
                <div className={q.name}>
                    <h2>Name</h2>
                    <div className={q.item}>{props.profile.fullName}</div>
                </div>

                <h3>Status</h3>
                <div className={q.status}>

                    {
                        props.authorizedUserId === props.profile.userId

                            ?
                            <img src={pencil} alt=""/>
                            :
                            null
                    }

                    <ProfileStatusWithHooks userId={props.profile.userId} authorizedUserId={props.authorizedUserId} status={props.status} updateStatus={props.updateStatus}/>
                </div>

            </div>

        </div>
    );

}

export default ProfileInfo;