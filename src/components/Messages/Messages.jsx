import React from 'react';
import MESSAGE_HISTORY from './Message_history/Message_history';
import q from './Messages.module.css'
import Partners from './Partners/Partners';












const Messages = (props) => {
    let partnersElements = props.partnersData.map(el => <Partners name={el.name} count={el.count} />);
    let messagesElements = props.messagesData.map(el => <MESSAGE_HISTORY text={el.text} />);
    return (
        <div className={q.messages}>


            <div className={q.title}>
                Messages
            </div>

            <div className={q.partners}>

                {partnersElements}

            </div>

            <div className={q.message_history}>

                {messagesElements}

            </div>

        </div>
    );
}

export default Messages;