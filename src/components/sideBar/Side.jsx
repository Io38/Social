import React from "react";
import { NavLink } from "react-router-dom";
import q from './Side.module.css';

const Side = () => {

    return (
        <div className={q.side_bar}>
            <nav>

                <div className={q.item}>
                    <NavLink to="/profile" activeClassName={q.activeLink}>Profile</NavLink>
                </div>

                <div className={q.item}>
                    <NavLink to="/messages" activeClassName={q.activeLink}>Messages</NavLink>
                </div>

                <div className={q.item}>
                    <NavLink to="/news" activeClassName={q.activeLink}>News</NavLink>
                </div>

                <div className={q.item}>
                    <NavLink to="/music" activeClassName={q.activeLink}>Music</NavLink>
                </div>

                <div className={q.item}>
                    <NavLink to="/friends" activeClassName={q.activeLink}>Friends</NavLink>
                </div>
                <div className={q.item}>
                    <NavLink to="/settings" activeClassName={q.activeLink}>Settings</NavLink>
                </div>

            </nav>
        </div>
    )
}
export default Side;