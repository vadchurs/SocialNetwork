import {authApi, securityApi} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = "SET-USER-DATA";
const GET_CAPTCHA_URL = "GET_CAPTCHA_URL"


let initialState = {
    userData: {
        id: null,
        login: null,
        email: null,
    },
    isAuth: false,
    captchaUrl: null
};
let AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            let stateCopy = {...state};
            stateCopy.userData = {...state.userData};
            stateCopy.userData.id = action.userData.data.id;
            stateCopy.userData.login = action.userData.data.login;
            stateCopy.userData.email = action.userData.data.email;
            stateCopy.isAuth = action.isAuth;
            return stateCopy;
        case GET_CAPTCHA_URL:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        default:
            return state;
    }
};

export const getCaptchaUrlSucces = (captchaUrl) => {
    return {
        type: GET_CAPTCHA_URL,
        captchaUrl
    }
}

export const setUserDataSucces = (userData, isAuth) => {
    return {
        type: SET_USER_DATA,
        isAuth,
        userData
    }
};

export const getCaptchaUrl = () => {
    return async (dispatch) => {
        const captchaUrl = await securityApi.getCaptchaUrl()
        dispatch(getCaptchaUrlSucces(captchaUrl.url))
    }
}

export const setUserData = () => {
    return (dispatch) => {
        return authApi.getAuth().then((data) => {
            if (data.resultCode === 0) {
                dispatch(setUserDataSucces(data, true))
            }
        });
    }
};

export const login = (email, password, rememberMe = false, captcha) => {
    return async (dispatch) => {
        let data = await authApi.loginUser(email, password, rememberMe,captcha)
        if (data.resultCode === 0) {
            dispatch(setUserData())
        } else if (data.resultCode === 10) {
            dispatch(getCaptchaUrl())
            dispatch(stopSubmit("Login", {_error: data.messages[0]}))
        } else {
            dispatch(stopSubmit("Login", {_error: data.messages[0]}))
        }
    }
};

export const logout = () => {
    return async (dispatch) => {
        let data = await authApi.logoutUser();
        if (data.resultCode === 0) {
            let userData = {data: {id: null, login: null, email: null}};
            dispatch(setUserDataSucces(userData, false))
        }
    }
};


export default AuthReducer;