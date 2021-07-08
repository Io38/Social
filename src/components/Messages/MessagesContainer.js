import React from 'react';
import MESSAGE_HISTORY from './Message_history/Message_history';
import Partners from './Partners/Partners';
import { sendMessageActionCreator, updateMessageTextActionCreator } from '../../redux/messages-reducer';
import Messages from './Messages';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {

    return {

        partnersElements: state.messages.partnersData.map(el => <Partners name={el.name} count={el.count} />),
        messagesElements: state.messages.messagesData.map(el => <MESSAGE_HISTORY text={el.text} />),
        newMessageText: state.messages.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        sendMessage: () => {
            let action = sendMessageActionCreator();
            dispatch(action);
        },
        updateNewMessageText: (text) => { dispatch(updateMessageTextActionCreator(text)); }

    }
}
const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;