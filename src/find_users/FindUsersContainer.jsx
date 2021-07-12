import { connect } from 'react-redux';
import { friend, setPage, setUsers, unFriend, setTotalUsersCount, setIsLoading } from '../redux/users-reducer';
import FindUsers from './FindUsers';

let StateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isLoading: state.users.isLoading
    }
}

// let DispatchToProps = (dispatch) => {
//     return {
//         friend: (userId) => {

//             dispatch(friendAC(userId));
//         },
//         unFriend: (userId) => {
//             dispatch(unFriendAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setPage: (page) => {
//             dispatch(setPageAC(page));
//         },
//         setTotalUsersCount: (usersCount) => {
//             dispatch(setTotalUsersCountAC(usersCount));
//         },
//         setIsLoading: (value) => {
//             dispatch(setIsLoadingAC(value));
//         }

//     }
// }

let FindUsersContainer = connect(StateToProps, { friend, unFriend, setUsers, setPage, setTotalUsersCount, setIsLoading })(FindUsers);

export default FindUsersContainer;