import React from "react";
import { connect } from "react-redux";
import {getAuthUserData, logout} from "../../redux/auth-reducer";
import Header from "./Header";


class HeaderContainer extends React.Component {


    render() {

        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({

    isAuth: state.auth.isAuth

})


export default connect(mapStateToProps, {  logout })(HeaderContainer)