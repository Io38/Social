import axios from 'axios';
import React from 'react'
import { connect } from 'react-redux';
import Profile from './Profile'
import { setUserProfilePage } from './../../redux/profile-reducer'
import { withRouter } from 'react-router-dom';

class ProfileContainer extends React.Component {
    //7912


    componentDidMount() {

        let userId = this.props.match.params.userId;

        if (!userId) {
            userId = 7912;
        }

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {

                this.props.setUserProfilePage(response.data);

            })
    }



    render() {

        return <Profile {...this.props} profile={this.props.profile} />
    }
}


let mapStateToProps = (state) => {

    return {
        profile: state.profile.profile
    };
}


let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfilePage })(WithUrlDataContainerComponent);