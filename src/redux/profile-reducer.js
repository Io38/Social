const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE_PAGE = 'SET_USER_PROFILE_PAGE';

let initialState = {
    PostData: [],
    newPostText: '',
    profile: null
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            if (state.newPostText.trim() !== "") {

                let newPost = {
                    count: "1",
                    text: state.newPostText,
                    LikesCount: "0"
                };

                return {
                    ...state,
                    PostData: [newPost, ...state.PostData],
                    newPostText: ''
                }

            }
            return state;


        case UPDATE_NEW_POST_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }


        case SET_USER_PROFILE_PAGE:
            console.log("workin");
            return {
                ...state,
                profile: action.profile

            }

        default:
            return state;
    }


}
export const addPostActionCreator = () => ({ type: ADD_POST });
export const updatePostTextActionCreator = (text) => ({ type: UPDATE_NEW_POST_TEXT, newText: text });
export const setUserProfilePage = (profile) => ({ type: SET_USER_PROFILE_PAGE, profile });

export default profileReducer;