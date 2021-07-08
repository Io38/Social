import React from 'react';
import MESSAGE_HISTORY from './Message_history/Message_history';
import q from './Messages.module.css'
import Partners from './Partners/Partners';
import { sendMessageActionCreator, updateMessageTextActionCreator } from '../../redux/messages-reducer';





const Messages = (props) => {
    let partnersElements = props.messages.partnersData.map(el => <Partners name={el.name} count={el.count} />);
    let messagesElements = props.messages.messagesData.map(el => <MESSAGE_HISTORY text={el.text} />);

    let sendMessage = () => {

        let action = sendMessageActionCreator();
        props.dispatch(action);
    }

    let updateNewMessageText = (event) => {

        let text = event.target.value;
        props.dispatch(updateMessageTextActionCreator(text));

    }
    return (
        <div className={q.messages}>


            <div className={q.title}>
                Messages
            </div>

            <div className={q.partners}>

                {partnersElements}

            </div>

            <div className={q.message_history}>

                <div> {messagesElements} </div>

                <div>
                    <div> <textarea
                        value={props.messages.newMessageText}
                        onChange={updateNewMessageText} /> </div>
                    <div> <button onClick={sendMessage}>Send</button></div>
                </div>

            </div>

        </div >
    );
}

export default Messages;