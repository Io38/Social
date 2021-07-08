const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

const messagesReducer = (state, action) => {

    debugger;
    switch (action.type) {

        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newText;

            return state;

        case SEND_MESSAGE:

            let mes = state.newMessageText;
            state.newMessageText = "";
            state.messagesData.push({ count: "12", text: mes });

            return state;

        default:
            return state;

    }





}

export const updateMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export default messagesReducer;