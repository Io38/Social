import { connect } from 'react-redux';
import { friendAC, setPageAC, setUsersAC, unFriendAC, setTotalUsersCountAC } from '../redux/users-reducer';
import FindUsers from './FindUsers';

let StateToProps = (state) => {
    return {
        users: state.users.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage
    }
}

let DispatchToProps = (dispatch) => {
    return {
        friend: (userId) => {

            dispatch(friendAC(userId));
        },
        unFriend: (userId) => {
            dispatch(unFriendAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setPage: (page) => {
            dispatch(setPageAC(page));
        },
        setTotalUsersCount: (usersCount) => {
            dispatch(setTotalUsersCountAC(usersCount));
        }

    }
}

let FindUsersContainer = connect(StateToProps, DispatchToProps)(FindUsers);

export default FindUsersContainer;