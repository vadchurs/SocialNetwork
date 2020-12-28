import React from "react";
import styles from "./FormControls.module.css"

export let Textarea = ({input,meta,...props}) => {
    let error = meta.error && meta.touched ? "errorTextarea" : "";
    return(
        <div>
            <textarea className={styles[error]} {...input} {...props}/>
            <div>
                {meta.error && meta.touched && <span className={styles.errorInput}>{meta.error}</span>}
            </div>
        </div>
    )
};

export let Input = ({input,meta,...props}) => {
    let error = meta.error && meta.touched ? "errorTextarea" : "";
    return(
        <div>
            <input className={styles[error]} {...input} {...props}/>
            <div>
                {meta.error && meta.touched && <span className={styles.errorInput}>{meta.error}</span>}
            </div>
        </div>
    )
};