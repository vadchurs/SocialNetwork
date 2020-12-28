import React from 'react';
import styles from './Profile.module.css';
import {connect} from "react-redux";
import Profile from "./Profile";
import {getStatus, setUserProfile, updatePhoto, updateStatus, updateUserProfile} from "../../redux/profilePageReducer";
import { withRouter } from 'react-router-dom';
import {withAuthRedirect} from "../../authRedirect/authRedirect";
import {compose} from "redux";



class ProfileContainer extends React.Component {

    state = {
        editMode: false
}

onChangeEditMode = (editMode) => {
        this.setState({
            editMode
        })
};

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if(!userId){
            userId=this.props.authorizedUserId;
            if(!userId){
                this.props.history.push("/login")
            }
        }

        this.props.setUserProfile(userId);
        this.props.getStatus(userId);
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userId != prevProps.match.params.userId) {
            let userId = this.props.match.params.userId;
            if(!userId){
                userId=this.props.authorizedUserId;
                if(!userId){
                    this.props.history.push("/login")
                }
            }

            this.props.setUserProfile(userId);
            this.props.getStatus(userId);
        }
    }

    render() {
        return (
            <Profile {...this.props} isOwner = {!this.props.match.params.userId} editMode={this.state.editMode} onChangeEditMode={this.onChangeEditMode} userId={this.userId}/>
        )
    }
};

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        authorizedUserId: state.auth.userData.id
    }
};

export default compose(connect(mapStateToProps,{setUserProfile,getStatus,updateStatus,updateUserProfile,updatePhoto}),withAuthRedirect,withRouter)(ProfileContainer);
