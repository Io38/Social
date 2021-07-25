import React from 'react';
import LoginForm from "./loginForm";
import { signIn} from "../redux/auth-reducer";
import {connect} from "react-redux";


const Login = (props) => {
    return (<div>

        <h1>LOGIN</h1>
        <LoginForm login = {props.signIn} isAuth={props.isAuth}/>


    </div>)


}
let mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {signIn})(Login);