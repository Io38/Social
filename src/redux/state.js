import renderEntireTree from "../render";


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
        PostData: [


        ]
    }

}



export let addPost = (postMessage) => {
    if (postMessage.trim() !== "") {

        let newPost = {
            count: "1",
            text: postMessage,
            LikesCount: "0"
        }

        // state.profile.PostData.push(newPost);
        state.profile.PostData.unshift(newPost);
        renderEntireTree(state);
    }
}

export default state;