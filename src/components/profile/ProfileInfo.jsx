import React from 'react';
import q from './ProfileInfo.module.css';


const ProfileInfo = () => {

    return (
        <div>
            <div className={q.avatarka}>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                    alt="Error 404 " className={q.avatar} ></img>
            </div>
            Name Sirname<br />
            description<br />
            Posts:<br /><br /><br /><br /><br />
        </div>
    );

}

export default ProfileInfo;