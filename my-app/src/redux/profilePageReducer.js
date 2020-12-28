import {profileApi} from "../api/api";
import {stopSubmit} from "redux-form";

const ON_CHANGE_POST_TEXT = "ON-CHANGE-POST-TEXT";
const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_STATUS = "SET-STATUS";
const UPDATE_STATUS = "UPDATE-STATUS";
let initialState={
    postsData: [
        {id:1, message: "How are you?", like: 12},
        {id:2, message: "Where are you from?", like: 18},
        {id:3, message: "Where are you from?", like: 23},
        {id:4, message: "Where are you from?", like: 11},
        {id:5, message: "How are you?", like: 122},
    ],
    postText: "",
    userProfile: null,
    status: ''
};
let profilePageReducer = (state=initialState,action) => {
    switch (action.type) {
        case ADD_POST:
        {
            let newPostArr = {
                message: state.postText,
                like: 13
            };
            return {
                ...state,
                postsData:[...state.postsData,newPostArr],
                postText:''
            }
        }
        case ON_CHANGE_POST_TEXT:
        {
            return {
                ...state,
                postText: action.newText
            }
        }
        case SET_USER_PROFILE:
        {
            return {
                ...state,
                userProfile: action.userProfile
            }
        }
        case SET_STATUS:
        {
            return {
                ...state,
                status: action.status
            }
        }
        case UPDATE_STATUS:
        {
            return {
                ...state,
                status: action.status
            }
        }
        default: return state;
    }
};

export const addPost = () => {
    return {
        type: ADD_POST
    }
};

export const onChangePostText = (newText) => {
    return {
        newText, type: ON_CHANGE_POST_TEXT
    }
};

export const setUserProfileSucces = (userProfile) => {
    return {
        type: SET_USER_PROFILE,
        userProfile
    }
};

export const getStatusSucces = (status) => {
    return {
        type: SET_STATUS,
        status
    }
};

export const updateStatusSucces = (status) => {
    return {
        type: UPDATE_STATUS,
        status
    }
};

export const getStatus = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId).then(data => {
            dispatch(getStatusSucces(data))
        })
    }
}

export const updateStatus = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status).then(data => {
            if(data.resultCode===0) {
                dispatch(updateStatusSucces(status))
            }
        })
    }
};

export const setUserProfile = (userId) => {
    return (dispatch) => {
        profileApi.setUserProfile(userId).then((data) => {
            dispatch(setUserProfileSucces(data));
        });
    }
};

export const updateUserProfile = (profile) => {
    return async (dispatch,getState) => {
        const userId = getState().auth.userData.id;
        const data = await profileApi.updateUserProfile(profile);
            if(data.resultCode===0){
                dispatch(setUserProfile(userId));
            }else {
                dispatch(stopSubmit("edit-profile",{_error:data.messages[0]}));
                return Promise.reject(data.messages[0])
            };
    }
};

export const updatePhoto = (photo) => {
    return (dispatch,getState) => {
        const userId = getState().auth.userData.id;
        profileApi.updatePhoto(photo).then((response) => {
            if(response.data.resultCode===0) {
                dispatch(setUserProfile(userId));
            }
        });
    }
};

export default profilePageReducer;