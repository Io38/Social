import React from 'react'
import {connect} from 'react-redux';
import Profile from './Profile'
import {getProfile, getStatus, updateStatus} from './../../redux/profile-reducer'
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {withAuthRedirect} from '../../HOC/withAuthRedirect';
import Preloader from "../preloader/Preloader";


class ProfileContainer extends React.Component {


    componentDidMount() {

        let userId = this.props.match.params.userId;

        if (!userId) {

            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push('/login')
            }
            //userId = 18322;
        }

        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }


    render() {

        return (<>


            <Profile {...this.props} profile={this.props.profile} status={this.props.status}
                     updateStatus={this.props.updateStatus}/>

        </>)
    }
}


let mapStateToProps = (state) => {

    return {
        profile: state.profile.profile,
        isAuth: state.auth.isAuth,
        status: state.profile.status,
        authorizedUserId: state.auth.userId
    };
}

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);