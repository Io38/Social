import {authAPI} from "../api/api";

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isFetching: false,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {

        case SET_AUTH_USER_DATA:


            return {
                ...state,
                ...action.data,
                
            }

        default:
            return state;
    }
}

window.auth = initialState;

export const setAuthUserData = (email, login, userId, isAuth) => ({type: SET_AUTH_USER_DATA, data: {email, login, userId, isAuth}})


export const getAuthUserData = () => {

    return (dispatch) => {

        authAPI.me().then(response => {

            if (response.data.resultCode === 0) {

                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, login, email,true));

            }

        })
    }

}

export const signIn = (email, password, rememberMe) => (dispatch) => {

    authAPI.login(email, password, rememberMe)
        .then(response => {

            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
                debugger
            }
        })
}

export const logout = () => (dispatch) => {
    authAPI.logout()
        .then(response => {

            if (response.data.resultCode === 0) {
                setAuthUserData(null, null, null,false);

            }
        })
}


export default authReducer;