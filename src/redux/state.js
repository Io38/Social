let renderEntireTree = () => {

    console.log("1wqe");

}


let state = {
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

}



export let addPost = () => {
    if (state.profile.newPostText.trim() !== "") {

        let newPost = {
            count: "1",
            text: state.profile.newPostText,
            LikesCount: "0"
        }

        // state.profile.PostData.push(newPost);
        state.profile.PostData.unshift(newPost);
        state.profile.newPostText = '';
        renderEntireTree(state);
    }
}


export let updateNewPostText = (newText) => {

    state.profile.newPostText = newText;
    renderEntireTree(state);

}

export const subscribe = (observer) => {

    renderEntireTree = observer;
}
export default state;