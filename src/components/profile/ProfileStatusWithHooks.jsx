import React, {useEffect, useState} from 'react';
import q from './ProfileStatus.module.css';

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])


    const editModeOn = () => {
        debugger
        if (props.authorizedUserId === props.userId) {
            setEditMode(true)
        }
    }

    const editModeOff = () => {
        props.updateStatus(status);
        setEditMode(false);
    }


    const onStatusChange = (e) => {

        setStatus(e.currentTarget.value);
    }


    return (
        <div className={q.all} onClick={editModeOn}>
            {

                editMode
                    ?
                    <input onBlur={editModeOff} autoFocus value={status} onChange={onStatusChange}/>
                    :
                    <span className={q.item}>{status}</span>
            }


        </div>
    )

}


export default ProfileStatusWithHooks;
