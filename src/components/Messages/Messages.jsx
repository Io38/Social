
import React from 'react';
import q from './Messages.module.css'












const Messages = (props) => {

    return (
        <div className={q.messages}>


            <div className={q.title}>
                Messages
            </div>

            <div className={q.partners}>

                {props.partnersElements}

            </div>

            <div className={q.message_history}>

                {props.messagesElements}

            </div>

        </div>
    );
}

export default Messages;