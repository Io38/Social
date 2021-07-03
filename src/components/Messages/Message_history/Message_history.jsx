import React from 'react';
import q from './Message_history.module.css';


const Message_history = (props) => {

    return (
        <div className={q.item}>{props.text}</div>
    );

}
export default Message_history;