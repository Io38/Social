import { connect } from 'react-redux';
import { friendAC, setUsersAC, unFriendAC } from '../redux/users-reducer';
import FindUsers from './FindUsers';

let StateToProps = (state) => {
    return {
        users: state.users.users
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
        }
    }
}

let FindUsersContainer = connect(StateToProps, DispatchToProps)(FindUsers);

export default FindUsersContainer;