const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    partnersData: [
        { count: "1", name: "Vasya" },
        { count: "2", name: "Petya" },
        { count: "3", name: "John" },
        { count: "4", name: "Viktorrrrr" },

    ],
    messagesData: [
        { count: "1", text: "hi!" },
        { count: "2", text: "How r u?" },
        { count: "3", text: "Hello!" },
        { count: "4", text: "ty" },
        { count: "4", text: "ty" },
    ],

    newMessageText: ""
}

const messagesReducer = (state = initialState, action) => {

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