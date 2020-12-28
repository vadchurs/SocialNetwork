import React from "react"
import {Field} from "redux-form";
import {maxLength, required} from "../../utils/validate/validate";
import {Textarea} from "../../assets/FormContols/FormControls";

let maxLengthValidate = maxLength(10);

let FormComponent = (props) => {
    return (
        <form onSubmit = {props.handleSubmit}>
            <Field component={Textarea} name={props.name} placeholder={"Введите сообщение"} validate={[required,maxLengthValidate]}/>
            <button>Добавить пост</button>
        </form>
        )
}

export default FormComponent;