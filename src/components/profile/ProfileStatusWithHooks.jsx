import React, {useEffect, useState} from 'react';
import  q from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

useEffect(()=>{
    setStatus(props.status)
},[props.status])


    const editModeOn = () => {

        setEditMode(true)
    }

    const editModeOff = () => {
        props.updateStatus(status);
        setEditMode(false);
    }


    const onStatusChange = (e) => {

        setStatus(e.currentTarget.value);
    }




    return (
        <div>
            {

                editMode
                    ?
                    <input onBlur={editModeOff} autoFocus value={status} onChange={onStatusChange}/>
                    :
                    <span className={q.item} onClick={editModeOn}>{status}</span>
            }


        </div>
    )

}


export default ProfileStatusWithHooks;
