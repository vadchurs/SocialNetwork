import React from "react"
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

let mapStateToProps = (state) => {
    return {
        isAuth:state.auth.isAuth
    }
};

export let withAuthRedirect = (Component) => {
    let WrapperComponent = (props) => {
        if(!props.isAuth){
            return <Redirect to={"/login"}/>
        }
        return <Component {...props}/>
    }
    let connectedWrapperComponent = connect(mapStateToProps)(WrapperComponent);
    return connectedWrapperComponent
};



