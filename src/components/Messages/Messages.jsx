
import React from 'react';
import { NavLink } from 'react-router-dom';
import q from './Messages.module.css'
import MessageHistory from './Message_history/Message_history';
import Partners from './Partners/Partners';




let partnersData = [
    { count: "1", name: "Vasya" },
    { count: "2", name: "Petya" },
    { count: "3", name: "John" },
    { count: "4", name: "Viktor" },
];

let messagesData = [
    { text: "hi!" },
    { text: "How r u?" },
    { text: "Hello!" },
    { text: "ty" }
];

const Messages = () => {

    return (
        <div className={q.messages}>


            <div className={q.title}>
                Messages
            </div>

            <div className={q.partners}>
                <Partners name={partnersData[0].name} count={partnersData[0].count} />
                <Partners name={partnersData[1].name} count={partnersData[1].count} />
                <Partners name={partnersData[2].name} count={partnersData[2].count} />
                <Partners name={partnersData[3].name} count={partnersData[3].count} />

            </div>

            <div className={q.message_history}>

                <MessageHistory text={messagesData[0].text} />
                <MessageHistory text={messagesData[1].text} />
                <MessageHistory text={messagesData[2].text} />
                <MessageHistory text={messagesData[3].text} />



            </div>

        </div>
    );
}

export default Messages;