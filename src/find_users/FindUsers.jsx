import React from 'react';
import q from "./FindUsers.module.css"

let FindUsers = (props) => {
    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>

                            <img src={u.photoUrl} className={q.ava} alt="failed to download the pic" />
                        </div>

                        <div>{u.friend ?
                            <button onClick={() => { props.unfriend(u.id) }} >Remove from a friend list</button> :
                            <button onClick={() => { props.friend(u.id) }}>Add to friend list</button>}</div>

                        <span>


                            <span>
                                <div>{u.fullName}</div>
                                <div>{u.status}</div>
                            </span>

                            <span>
                                <div>{u.location.country} </div>
                                <div>{u.location.city}</div>
                            </span>


                        </span>


                    </span>
                </ div>)
            }
        </div>
    );
}

export default FindUsers;