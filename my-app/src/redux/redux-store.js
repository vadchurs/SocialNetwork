import {applyMiddleware, combineReducers, createStore} from "redux";
import profilePageReducer from "./profilePageReducer";
import dialogPageReducer from "./dialogPageReducer";
import sidebarPageReducer from "./sidebarPageReducer";
import usersPageReducer from "./userPageReducer";
import AuthReducer from "./AuthReducer";
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import AppReducer from "./AppReducer";

let reducers = combineReducers({
    profilePage: profilePageReducer,
    dialogPage: dialogPageReducer,
    sidebarPage: sidebarPageReducer,
    usersPage: usersPageReducer,
    auth: AuthReducer,
    app: AppReducer,
    form: formReducer
})

let store = createStore(reducers,applyMiddleware(thunkMiddleware));

export default store;