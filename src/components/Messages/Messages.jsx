import React from 'react';
import { Redirect } from 'react-router-dom';
import q from './Messages.module.css'





const Messages = (props) => {


    let onSendMessage = () => {

        props.sendMessage();
    }

    let onUpdateNewMessageText = (event) => {

        let text = event.target.value;
        props.updateNewMessageText(text);

    }


    if (!props.isAuth)
        return <Redirect to={'/login'} />

    return (
        <div className={q.messages}>


            <div className={q.title}>
                Messages
            </div>

            <div className={q.partners}>

                {props.partnersElements}

            </div>

            <div className={q.message_history}>

                <div> {props.messagesElements} </div>

                <div>

                    <div>
                        <textarea
                            placeholder="Enter message"
                            value={props.newMessageText}
                            onChange={onUpdateNewMessageText} />
                    </div>

                    <div>
                        <button onClick={onSendMessage}>Send</button>
                    </div>

                </div>

            </div>

        </div >
    );
}

export default Messages;