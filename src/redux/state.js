
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

    renderEntireTree() {

        console.log("1wqe");

    },

    updateNewPostText(newText) {

        state.profile.newPostText = newText;
        renderEntireTree(state);

    },

    subscribe(observer) {

        renderEntireTree = observer;
    }









}





export default store;