const FRIEND = 'FRIEND';
const UNFRIEND = 'UNFRIEND';
const SET_USERS = "SET-USERS"
let initialState = {
    users: [
        { id: 1, friend: true, fullName: "name1", status: "status1", location: { city: "City 1", country: "Country 1" }, photoUrl: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" },
        { id: 1, friend: false, fullName: "name2", status: "status2", location: { city: "City 2", country: "Country 2" }, photoUrl: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" },
        { id: 1, friend: true, fullName: "name3", status: "status3", location: { city: "City 3", country: "Country 3" }, photoUrl: "https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" },
    ]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FRIEND:
            return {
                ...state,

                users: state.users.map(u => {

                    if (u.id === action.userId) {

                        return { ...u, friend: true }
                    }
                    return u;
                })
            }
        case UNFRIEND:
            return {
                ...state,

                users: state.users.map(u => {

                    if (u.id === action.userId) {

                        return { ...u, friend: false }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.user]
            }

        default: return state;


    }





}

export const friendAC = (userId) => ({ type: FRIEND, id: userId });
export const unFriendAC = (userId) => ({ type: UNFRIEND, id: userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersReducer;