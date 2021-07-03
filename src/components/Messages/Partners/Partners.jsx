import React from 'react';
import { NavLink } from "react-router-dom";
import q from './Partners.module.css';


const Partners = (props) => {

    return (


        <NavLink to={"/messages/" + props.count}>
            <div className={q.dialog_partner}>

                {props.name}

            </div>
        </NavLink>



    );
}
export default Partners;