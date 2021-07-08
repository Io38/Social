
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });


export const updateMessageTextActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newText: text });
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });


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
        // eslint-disable-next-line default-case
        switch (action.type) {
            case ADD_POST:
                if (this._state.profile.newPostText.trim() !== "") {

                    let newPost = {
                        count: "1",
                        text: this._state.profile.newPostText,
                        LikesCount: "0"
                    }

                    // state.profile.PostData.push(newPost);
                    this._state.profile.PostData.unshift(newPost);
                    this._state.profile.newPostText = '';
                    this._callSubscriber(this._state);
                }
                break;

            case UPDATE_NEW_POST_TEXT:
                this._state.profile.newPostText = action.newText;
                this._callSubscriber(this._state);
                break;

            case UPDATE_NEW_MESSAGE_TEXT:
                this._state.messages.newMessageText = action.newText;
                this._callSubscriber(this._state);
                break;

            case SEND_MESSAGE:

                let mes = this._state.messages.newMessageText;
                this._state.messages.newMessageText = "";
                this._state.messages.messagesData.push({ count: "12", text: mes });
                this._callSubscriber(this._state);
                break;


        }



    }









}





export default store;