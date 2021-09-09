const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const GET_DIALOG_HISTORY = 'GET_DIALOG_HISTORY';

let initialState = {
    partnersData: [
        {count: "1", name: "Vasya", active: true},
        {count: "2", name: "Petya", active: false},
        {count: "3", name: "John", active: false},
        {count: "4", name: "Viktor", active: false},

    ],
    messagesData: [
        {count: "1", text: "hi!"},
        {count: "2", text: "How r u?"},
        {count: "3", text: "Hello!"},
        {count: "4", text: "ty"},
        {count: "4", text: "nice"},
    ],

    newMessageText: ""
}

const messagesReducer = (state = initialState, action) => {
   
    switch (action.type) {

        case UPDATE_NEW_MESSAGE_TEXT:

            return {
                ...state,
                newMessageText: action.newText
            }


        case SEND_MESSAGE:

            let mes = {count: "12", text: state.newMessageText};
            state.newMessageText = "";

            return {
                ...state,
                messagesData: [...state.messagesData, mes]
            }
        case GET_DIALOG_HISTORY:

            state.partnersData.map(el => {

                if (el.count === action.count) {

                    return {...el, active: true}
                }
                return {...el}
            })

        default:
            return state;

    }


}

export const updateMessageTextActionCreator = (text) => ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text});
export const sendMessageActionCreator = () => ({type: SEND_MESSAGE});
export const getDialogHistory = (count) => ({type: GET_DIALOG_HISTORY, count});


export default messagesReducer;