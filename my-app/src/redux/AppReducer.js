import {authApi} from "../api/api";
import {setUserData} from "./AuthReducer";

const INITIALIZED_APP = "INITIALIZED-APP";


let initialState = {
    initializedApp: false
};

let AppReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_APP:
            return {
                ...state,
                initializedApp: true
            };
        default:
            return state
    }
};

let initializedSucces = () => {
    return {
        type: INITIALIZED_APP
    }
};

export let initialized = () => {
    return async (dispatch) => {
        await dispatch(setUserData());
            dispatch(initializedSucces())
    }
};

export default AppReducer;