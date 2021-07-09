import React from 'react';
import { connect } from 'react-redux';
import { friendAC, unFriendAC } from '../redux/users-reducer';
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
        unfriend: (userId) => {
            dispatch(unFriendAC(userId));
        },
        setUsers: () => {

        }
    }
}

let FindUsersContainer = connect(StateToProps, DispatchToProps)(FindUsers);

export default FindUsersContainer;