
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
                { count: "4", text: "ty" }
            ]
        },
        profile: {
            PostData: [],
            newPostText: ''
        }

    },

    getState() {

        return this._state;
    },

    _callSubscriber() {

        console.log("1wqe");

    },
    addPost() {
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
    },

    updateNewPostText(newText) {

        this._state.profile.newPostText = newText;
        this._callSubscriber(this._state);

    },

    subscribe(observer) {

        this._callSubscriber = observer;
    }









}





export default store;