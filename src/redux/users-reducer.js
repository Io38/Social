import {usersAPI} from "../api/api";

const FRIEND = 'FRIEND';
const UNFRIEND = 'UNFRIEND';
const SET_USERS = "SET-USERS";
const SET_PAGE = "SET_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const SET_IS_LOADING = "SET_IS_LOADING";
const SET_LOADING = "SET_LOADING";

let initialState = {
    users: [],
    pageSize: 4,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: true,
    Loading: []
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FRIEND:
            return {
                ...state,

                users: state.users.map(u => {

                    if (u.id === action.id) {

                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFRIEND:
            return {
                ...state,

                users: state.users.map(u => {

                    if (u.id === action.id) {

                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }

        case SET_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_TOTAL_USERS_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalUsersCount
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.isLoading
            }

        case SET_LOADING:

            return {
                ...state,
                Loading: action.value ?
                    [...state.Loading, action.id] :
                    state.Loading.filter(id => id !== action.id)
            }

        default:
            return state;


    }

}
export const acceptFriend = (userId) => ({type: FRIEND, id: userId});
export const acceptUnFriend = (userId) => ({type: UNFRIEND, id: userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setPage = (page) => ({type: SET_PAGE, page: page});
export const setTotalUsersCount = (usersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount: usersCount});
export const setIsLoading = (value) => ({type: SET_IS_LOADING, isLoading: value});
export const setLoading = (value, id) => ({type: SET_LOADING, value, id});


export const getUsers = (currentPage, pageSize) => {

    return async (dispatch) => {

        dispatch(setIsLoading(true));
        dispatch(setPage(currentPage));

        let response = await usersAPI.downloadUsers(currentPage, pageSize)


        dispatch(setIsLoading(false));
        dispatch(setLoading(false, response.items.map(el => el.id)));

        dispatch(setUsers(response.items));
        dispatch(setTotalUsersCount(response.totalCount));

    }
}

export const friend = (id) => {

    return async (dispatch) => {

        dispatch(setLoading(true, id));

        let response = await usersAPI.friend(id)

        if (response.data.resultCode === 0) {

            dispatch(acceptFriend(id));
        }

        dispatch(setLoading(false, id));


    }
}

export const unFriend = (id) => {

    return async (dispatch) => {

        dispatch(setLoading(true, id));

        let response = await usersAPI.unFriend(id)

        if (response.data.resultCode === 0) {

            dispatch(acceptUnFriend(id));
        }

        dispatch(setLoading(false, id));


    }
}

export default usersReducer;