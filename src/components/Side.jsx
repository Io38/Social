import React from "react";
import q from './Side.module.css';

const Side = () => {

    return (<div className={q.side_bar}>
        <nav>

            <div className={q.item}>
                <a href="">Profile</a>
            </div>

            <div className={q.item}>
                <a href="">Messages</a>
            </div>

            <div className={q.item}>
                <a href="">News</a>
            </div>

            <div className={q.item}>
                <a href="">Music</a>
            </div>

            <div className={q.item}>
                <a href="">Friends</a>
            </div>
            <div className={q.item}>
                <a href="">Settings</a>
            </div>

        </nav>
    </div>
    )
}
export default Side;