const FRIEND = 'FRIEND';
const UNFRIEND = 'UNFRIEND';
const SET_USERS = "SET-USERS"

let initialState = {
    users: []
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
                users: [...state.users, ...action.users]
            }

        default: return state;


    }





}

export const friendAC = (userId) => ({ type: FRIEND, id: userId });
export const unFriendAC = (userId) => ({ type: UNFRIEND, id: userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;