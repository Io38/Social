const FRIEND = 'FRIEND';
const UNFRIEND = 'UNFRIEND';
const SET_USERS = "SET-USERS";
const SET_PAGE = "SET_PAGE"
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";

let initialState = {
    users: [],
    pageSize: 3,
    totalUsersCount: 0,
    currentPage: 1
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FRIEND:
            return {
                ...state,

                users: state.users.map(u => {

                    if (u.id === action.id) {

                        return { ...u, friend: true }
                    }
                    return u;
                })
            }
        case UNFRIEND:
            return {
                ...state,

                users: state.users.map(u => {

                    if (u.id === action.id) {

                        return { ...u, friend: false }
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

        default: return state;


    }

}

export const friendAC = (userId) => ({ type: FRIEND, id: userId });
export const unFriendAC = (userId) => ({ type: UNFRIEND, id: userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });
export const setPageAC = (page) => ({ type: SET_PAGE, page: page });
export const setTotalUsersCountAC = (usersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount: usersCount });

export default usersReducer;