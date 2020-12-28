import React from 'react';
import styles from './../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={styles.dialog}><NavLink to={path}><img src={props.ava} alt=""/>{props.name}</NavLink></div>
    )
}

export default DialogItem;
