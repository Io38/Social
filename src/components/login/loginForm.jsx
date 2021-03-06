import {useFormik} from "formik";
import React from "react";
import {Redirect} from "react-router-dom";
import * as Yup from "yup";
import q from './loginForm.module.css'

const LoginForm = (props, errors, touched) => {


    const formik = useFormik({

        initialValues: {
            email: '',
            password: '',
            rememberMe: '',
            captcha: ''
        },
        validationSchema: Yup.object({
            email: Yup
                .string()
                .email('Invalid email address')
                .required('Please enter your email'),
            password: Yup
                .string('')
                .required('Please enter your password'),

        }),
        onSubmit: (values) => {
            console.log(values);
            props.login(values.email, values.password, values.rememberMe,values.captcha);
        },
    })

    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }


    return (<div className={q.form}>
            <form onSubmit={formik.handleSubmit}>

                <div className={q.item}>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder='email'
                        onChange={formik.handleChange}
                        value={formik.values.email}

                    />
                    {
                        (formik.touched.email && formik.errors.email) ?
                            <div className={q.error}>
                                <label>{formik.errors.email}</label>
                            </div>
                            :
                            null
                    }

                </div>

                <div className={q.item}>
                    <input
                        id="password"
                        name="password"
                        type="password"
                        placeholder='password'
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                    {
                        (formik.touched.password && formik.errors.password) ?
                            <div className={q.error}>
                                <label>{formik.errors.password}</label>
                            </div>
                            :
                            null
                    }
                </div>


                <div className={q.checkbox}>
                    <input
                        id="rememberMe"
                        name="rememberMe"
                        type="checkbox"
                        onChange={formik.handleChange}
                        value={formik.values.checkbox}
                    />
                    <span>Remember me</span>
                </div>

                {
                    (props.captchaUrl)
                        ?
                        <div className={q.captcha}>


                            <img src={props.captchaUrl}/>

                            <div className={q.item}>
                                <input
                                    id="captcha"
                                    name="captcha"
                                    type="text"
                                    placeholder='captcha'
                                    onChange={formik.handleChange}
                                    value={formik.values.captcha}
                                />


                            </div>


                        </div>
                        :
                        null
                }


                <div>
                    <button type="submit">Sign in</button>
                </div>


            </form>
        </div>

    );
};

export default LoginForm;