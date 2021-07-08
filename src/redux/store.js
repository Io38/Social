import messagesReducer from "./messages-reducer";
import profileReducer from "./profile-reducer";




const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';







let store = {

    _state: {
        messages: {
            partnersData: [
                { count: "1", name: "Vasya" },
                { count: "2", name: "Petya" },
                { count: "3", name: "John" },
                { count: "4", name: "Viktor" },

            ],
            messagesData: [
                { count: "1", text: "hi!" },
                { count: "2", text: "How r u?" },
                { count: "3", text: "Hello!" },
                { count: "4", text: "ty" },
                { count: "4", text: "ty" },
            ],

            newMessageText: ""
        },
        profile: {
            PostData: [],
            newPostText: ''
        }

    },

    _callSubscriber() {

        console.log("1wqe");

    },

    getState() {

        return this._state;
    },


    subscribe(observer) {

        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.messages = messagesReducer(this._state.messages, action);

        this._callSubscriber(this._state);


    }









}





export default store;