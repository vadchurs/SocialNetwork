import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/AuthReducer";

class HeaderContainer extends React.Component {
    render(){
        return (
            <Header{...this.props}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        userData: state.auth.userData,
        state:state
    }
}

export default connect(mapStateToProps,{logout})(HeaderContainer);
