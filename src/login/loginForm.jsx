import {useFormik} from "formik";
import {login} from "../redux/auth-reducer";
import React from "react";
import {Redirect} from "react-router-dom";

 const LoginForm = (props) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: ''
        },
        onSubmit: (values) => {

            props.login(values.email, values.password, values.rememberMe);
        },
    });

    if(props.isAuth){
        return <Redirect to={'/profile'} />
    }
    return (
        <form onSubmit={formik.handleSubmit}>

            <div>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder='email'
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
            </div>

            <div>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder='password'
                    onChange={formik.handleChange}
                    value={formik.values.password}
                />
            </div>

            <div>
                <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"

                    onChange={formik.handleChange}
                    value={formik.values.checkbox}
                />Remember me
            </div>

            <div>
                <button type="submit">Sign in</button>
            </div>


        </form>
    );
};

export default LoginForm;