import {authAPI, securityAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const THROW_ERROR = 'THROW_ERROR';
const SET_CAPTCHA = 'SET_CAPTCHA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    error: false,
    errorMessage: null,
    captchaUrl: null
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_AUTH_USER_DATA:


            return {
                ...state,
                ...action.data,
                error: false,
                errorMessage: null

            }
        case SET_CAPTCHA:


            return {
                ...state,
                captchaUrl: action.captchaUrl

            }

        case THROW_ERROR:


            return {
                ...state,
                error: true,
                errorMessage: action.message

            }

        default:
            return state;
    }
}

window.auth = initialState;

export const setAuthUserData = (email, login, userId, isAuth) => ({
    type: SET_AUTH_USER_DATA,
    data: {email, login, userId, isAuth}
})

export const throwError = (message) => ({
    type: THROW_ERROR,
    message
})

export const setCaptcha = (captchaUrl) => ({
    type: SET_CAPTCHA,
    captchaUrl
})


export const getCaptcha = () => async (dispatch) => {

    const response = await securityAPI.getCaptcha();
    const captchaUrl = response.data.url;
    dispatch(setCaptcha(captchaUrl));
}


export const getAuthUserData = () => {

    return async (dispatch) => {

        let response = await authAPI.me()

        if (response.data.resultCode === 0) {

            let {id, login, email} = response.data.data;
            dispatch(setAuthUserData(email, login, id, true));
        }


    }

}

export const signIn = (email, password, rememberMe, captcha) => async (dispatch) => {
    debugger
    let response = await authAPI.login(email, password, rememberMe,captcha)


    if (response.data.resultCode === 0) {

        dispatch(getAuthUserData())
    } else {


        if (response.data.resultCode === 10) {
            dispatch(getCaptcha());
        }

        let message = response.data.messages[0];


        dispatch(throwError(message));
    }

}

export const logout = () => async (dispatch) => {
    let response = await authAPI.logout()

    if (response.data.resultCode === 0) {

        setAuthUserData(null, null, null, false);

    }
    window.location.reload();

}


export default authReducer;