import React from 'react';
import MESSAGE_HISTORY from './Message_history/Message_history';
import Partners from './Partners/Partners';
import {getDialogHistory, sendMessageActionCreator, updateMessageTextActionCreator} from '../../redux/messages-reducer';
import Messages from './Messages';
import {connect} from 'react-redux';
import {compose} from 'redux';
import {withAuthRedirect} from '../../HOC/withAuthRedirect';


let mapStateToProps = (state) => {

    return {

        partnersElements: state.messages.partnersData.map(el => <Partners name={el.name} count={el.count}
                                                                          active={el.active} qwe={getDialogHistory}/>),
        messagesElements: state.messages.messagesData.map(el => <MESSAGE_HISTORY text={el.text}/>),
        newMessageText: state.messages.newMessageText,
        isAuth: state.auth.isAuth,
        partnersData: state.messages.partnersData
    }
}

let mapDispatchToProps = (dispatch) => {

    return {
        sendMessage: () => {
            let action = sendMessageActionCreator();
            dispatch(action);
        },
        updateNewMessageText: (text) => {
            dispatch(updateMessageTextActionCreator(text))
        },
        getDialogHistory

    }
}


export default compose(
    connect(mapStateToProps, {sendMessageActionCreator,updateMessageTextActionCreator,getDialogHistory}),
    withAuthRedirect
)(Messages);