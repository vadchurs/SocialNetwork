import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../preloader/Preloader";
import StatusWithHooks from "../status/StatusWithHooks";
import {Input, Textarea} from "../../../assets/FormContols/FormControls";
import {required} from "../../../utils/validate/validate";
import {Field, reduxForm} from "redux-form";


const ProfileInfo = (props) => {

    if(!props.profilePage.userProfile){
        return (
            <Preloader/>
        )
    }

    let onSubmit = (formData) => {
        props.updateUserProfile(formData).then(()=>{
            props.onChangeEditMode(false);
        })
    }

    const updatePhoto = (e) => {
        if(e.target.files.length) {
            props.updatePhoto(e.target.files[0])
        }
    }

    return (
        <div className={styles.profileInfo}>
            <div>
                <div className={styles.avatar}><img src={props.profilePage.userProfile.photos.large ? props.profilePage.userProfile.photos.large : "https://i.ya-webdesign.com/images/user-avatar-png-7.png"} alt=""/></div>
                {props.isOwner && <input type="file" onChange={updatePhoto}/>}
                <StatusWithHooks status={props.profilePage.status} updateStatus={props.updateStatus} isOwner={props.isOwner}/>
            </div>
            <div className={styles.dopInfo}>
                {props.editMode ? <ReduxProfileDataForm initialValues={props.profilePage.userProfile} userProfile={props.profilePage.userProfile} onSubmit={onSubmit}/> :
                    <ProfileData  userProfile={props.profilePage.userProfile} onChangeEditMode={props.onChangeEditMode} isOwner={props.isOwner}/>}
            </div>
        </div>
    )
}


let ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            {props.error &&
            <div className={styles.errorForm}>{props.error}</div>
            }
            <div>
                <b>fullName:</b> <Field placeholder={"Введите имя"} type="text" component={Input} name={"fullName"}/>
            </div>
            <div>
                <b>lookingForAJob:</b> <Field type="checkbox" component={Input} name={"lookingForAJob"}/>
            </div>
            <div>
                <b>lookingForAJobDescription:</b> <Field placeholder={"Введите ваши скилы"} type="text" component={Textarea} name={"lookingForAJobDescription"}/>
            </div>
            <div>
                <b>AboutME:</b> <Field placeholder={"Побольше информации о себе"} type="text" component={Textarea} name={"aboutMe"}/>
            </div>
            <div>
                Contacts: {Object.keys(props.userProfile.contacts).map(key => {
                return <div key={key} className={styles.contact}>
                    <b>{key}:</b> <Field placeholder={key} type="text" component={Input} name={"contacts."+key}/>
                </div>
            })}
            </div>
            <div><button>Save</button></div>
        </form>
    )
}

let ReduxProfileDataForm = reduxForm({form:"edit-profile"})(ProfileDataForm);

let ProfileData = (props) => {
    return (
        <div>
            {props.isOwner && <button onClick={()=>{props.onChangeEditMode(true)}}>Change Profile</button>}
            <div>
                <b>fullName:</b> {props.userProfile.fullName}
            </div>
            <div>
                <b>lookingForAJob:</b> {props.userProfile.lookingForAJob ? "Yes" : "No"}
            </div>
            {props.userProfile.lookingForAJob && <div>
                <b>lookingForAJobDescription:</b> {props.userProfile.lookingForAJobDescription}
            </div>}
            <div>
                <b>AboutME:</b> {props.userProfile.aboutMe}
            </div>
            <div>
                Contacts: {Object.keys(props.userProfile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.userProfile.contacts[key]}/>
            })}
            </div>
        </div>
    )
}

let Contact = ({contactTitle, contactValue}) => {
    return (
        <div className={styles.contact}>
            <b>{contactTitle}:</b> <a href={contactValue}>{contactValue}</a>
        </div>
    )
}


export default ProfileInfo;
