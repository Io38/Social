import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';
const THROW_ERROR = 'THROW_ERROR';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false,
    error: false,
    errorMessage: null
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


export const getAuthUserData = () => {

    return (dispatch) => {

        return authAPI.me().then(response => {

            if (response.data.resultCode === 0) {

                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(email, login, id, true));


            }

        })
    }

}

export const signIn = (email, password, rememberMe) => (dispatch) => {

    authAPI.login(email, password, rememberMe)
        .then(response => {

            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())

            } else {

                let message = response.data.messages[0];
                dispatch(throwError(message));
            }
        })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {

            if (response.data.resultCode === 0) {
                setAuthUserData(null, null, null, false);

            }
        })
}


export default authReducer;