import React from 'react';
import LoginForm from "./loginForm";
import {signIn} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import q from './login.module.css';

const Login = (props) => {


    return (<div>

        <h1 className={q.login}>LOGIN</h1>
        {
            props.error
                ?
                <div className={q.error}>
                    <span> {props.errorMessage} </span>
                </div>
                :
                null
        }


        <LoginForm login={props.signIn} isAuth={props.isAuth} captchaUrl={props.captchaUrl}/>


    </div>)


}
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    error: state.auth.error,
    errorMessage: state.auth.errorMessage,
    captchaUrl: state.auth.captchaUrl
})
export default connect(mapStateToProps, {signIn})(Login);