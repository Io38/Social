import React from "react";
import {NavLink} from "react-router-dom";
import q from './Header.module.css';

const Header = (props) => {
    debugger
    return (
        <header className={q.header}>

            <img
                src="https://fiverr-res.cloudinary.com/w_280,f_auto,q_auto/attachments/generic_asset/asset/f7d61bd27b87eb26cc5a1730decf65fa-1577009326000/Foxit.png"
                alt="Failed to get img">

            </img>

            {
                props.isAuth
                    ?
                    <div className={q.right}>
                        <div className={q.profile}>
                            <NavLink to='/profile'>{props.login}</NavLink>
                        </div>


                        <div className={q.login} onClick={props.logout}>
                            <NavLink to='/profile'>logout</NavLink>
                        </div>

                    </div>
                    :
                    null

            }
        </header>);
}

export default Header;