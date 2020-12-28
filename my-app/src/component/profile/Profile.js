import React from 'react';
import styles from './Profile.module.css';
import ProfileInfo from "./profileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import {updatePhoto} from "../../redux/profilePageReducer";


const Profile = (props) => {
    return (
        <div className={styles.profile}>
            <ProfileInfo profilePage={props.profilePage} updateStatus={props.updateStatus}
                         isOwner={props.isOwner} editMode={props.editMode}
                         userId={props.userId}
                         onChangeEditMode={props.onChangeEditMode}
                         updateUserProfile={props.updateUserProfile}
                         updatePhoto={props.updatePhoto}
            />
            <hr/>
            <PostsContainer/>
        </div>
    )
};

export default Profile;
