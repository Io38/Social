import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setAuthUserData } from "../../redux/auth-reducer";
import Header from "./Header";


class HeaderContainer extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true })
            .then(response => {

                if (response.data.resultCode === 0) {
                    let { id, login, email } = response.data.data;
                    debugger;
                    setAuthUserData(id, login, email);

                }

            })
    }
    render() {

        return <Header />
    }
}

let mapStateToProps = (state) => ({

})


export default connect(mapStateToProps, { setAuthUserData })(HeaderContainer)