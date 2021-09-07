import React from 'react';
import {NavLink} from "react-router-dom";
import q from './Partners.module.css';


const Partners = (props) => {

    let onPartnerChange = (count) => {
        debugger


        props.qwe(count);
    }

    return (


        <NavLink to={"/messages/" + props.count}>
            <div className={q.item}>

                <div className={props.active ? q.active : q.qwe} onClick={()=>{onPartnerChange(props.count)}}>

                    {props.name}

                </div>

            </div>
        </NavLink>


    );
}
export default Partners;