
import React from 'react';
import q from './Messages.module.css'
import MessageHistory from './Message_history/Message_history';
import Partners from './Partners/Partners';




let partnersData = [
    { count: "1", name: "Vasya" },
    { count: "2", name: "Petya" },
    { count: "3", name: "John" },
    { count: "4", name: "Viktor" },
    { count: "5", name: "ZeroTwo" },
    { count: "6", name: "Sasha" },
];

let messagesData = [
    { count: "1", text: "hi!" },
    { count: "2", text: "How r u?" },
    { count: "3", text: "Hello!" },
    { count: "4", text: "ty" }
];

let partnersElements = partnersData.map(el => <Partners name={el.name} count={el.count} />);
let messagesElements = messagesData.map(el => <MessageHistory text={el.text} />);

const Messages = () => {

    return (
        <div className={q.messages}>


            <div className={q.title}>
                Messages
            </div>

            <div className={q.partners}>

                {partnersElements}

            </div>

            <div className={q.message_history}>

                {/* {messagesElements} */}

            </div>

        </div>
    );
}

export default Messages;