import React from 'react';
import styles from './Dialogs.module.css';
import DialogItem from "./dialog/Dialog";
import Message from "./message/Message";
import {reduxForm} from "redux-form";
import formComponent from "../form/formComponent";



const Dialogs = (props) => {

    let dialogElements = props.dialogPage.dialogsData.map(d=><DialogItem key={d.id} name={d.name} id={d.id} ava={d.ava}/>);
    let messagesElements = props.dialogPage.messagesData.map(m=><Message key={m.id} message={m.message}/>);

    let onSendMessage = () => {
        props.onSendMessage()
    }

    let onChangeMessageBody = (e) => {
        props.onChangeMessageBody(e.target.value)
    };

    let onSubmit = (formData) => {
        alert(formData.dialogField)
    };

    let ReduxDialogForm = reduxForm({form:"dialog"})(formComponent);

  return (
    <div className={styles.dialogs}>
        <div className={styles.dialogsItem}>
            {dialogElements}
        </div>
        <div className={styles.messages}>
            {messagesElements}
            <div>
            <ReduxDialogForm onSubmit={onSubmit} name={"dialogField"} maxLengthValue={30} />
            </div>
        </div>
    </div>
    )
}


export default Dialogs;
