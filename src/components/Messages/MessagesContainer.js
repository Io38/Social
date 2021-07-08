import React from 'react';
import MESSAGE_HISTORY from './Message_history/Message_history';
import Partners from './Partners/Partners';
import { sendMessageActionCreator, updateMessageTextActionCreator } from '../../redux/messages-reducer';
import Messages from './Messages';





const MessagesContainer = (props) => {
    let partnersElements = props.store.getState().messages.partnersData.map(el => <Partners name={el.name} count={el.count} />);
    let messagesElements = props.store.getState().messages.messagesData.map(el => <MESSAGE_HISTORY text={el.text} />);

    let sendMessage = () => {

        let action = sendMessageActionCreator();
        props.dispatch(action);
    }

    let updateNewMessageText = (text) => {

        props.dispatch(updateMessageTextActionCreator(text));

    }
    return (<Messages
        partnersElements={partnersElements}
        messagesElements={messagesElements}
        updateNewMessageText={updateNewMessageText}
        sendMessage={sendMessage}
        newMessageText={props.store.getState().messages.newMessageText} />
    );
}

export default MessagesContainer;