import {usersAPI, profileAPI} from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE_PAGE = 'SET_USER_PROFILE_PAGE';
const SET_STATUS = 'SET_STATUS';
const LIKE = 'LIKE';

let initialState = {
    PostData: [],
    newPostText: '',
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {

    switch (action.type) {

        case ADD_POST:
            if (state.newPostText.trim() !== "") {

                let newPost = {
                    count: state.PostData.length + 1,
                    text: state.newPostText,
                    LikesCount: 0,
                    isLiked:false
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

            return {
                ...state,
                PostData: [],
                profile: action.profile

            }
        case SET_STATUS:

            return {
                ...state,
                status: action.status

            }
        case LIKE:

            return {
                ...state,

                PostData: state.PostData.map(p => {

                    if (p.count === action.count) {

                        if (p.isLiked) {
                            return {...p, LikesCount: action.likesNumber - 1, isLiked: false}
                        } else {
                            return {...p, LikesCount: action.likesNumber + 1, isLiked: true}
                        }

                    }
                    return p;
                })
            }

        default:
            return state;
    }


}


export const addPostActionCreator = () => ({type: ADD_POST});
export const updatePostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text});
export const setUserProfilePage = (profile) => ({type: SET_USER_PROFILE_PAGE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const like = (count, likesNumber) => ({type: LIKE, count, likesNumber});

export const getProfile = (userId) => {

    return async (dispatch) => {

        let response = await usersAPI.getProfile(userId);
        console.log(response)
        dispatch(setUserProfilePage(response.data));

    }
}

export const getStatus = (userId) => {

    return async (dispatch) => {

        let response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));

    }
}

export const updateStatus = (status) => {

    return async (dispatch) => {

        let response = await profileAPI.updateStatus(status)

        if (response.data.resultCode === 0) {

            dispatch(setStatus(status));

        }


    }
}


export default profileReducer;