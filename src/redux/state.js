
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
            case "ADD-POST":
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

            case "UPDATE-NEW-POST-TEXT":
                this._state.profile.newPostText = action.newText;
                this._callSubscriber(this._state);
                break;


        }



    }









}





export default store;