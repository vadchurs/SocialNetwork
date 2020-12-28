import React from 'react';
import styles from './Posts.module.css';
import Post from "./post/Post";
import {Field, reduxForm} from "redux-form";
import FormComponent from "../../form/formComponent";

const Posts = (props) => {

    let addPost = () => {
        props.addPost();
    };

    let onChangePostText = (e) => {
        let newText = e.currentTarget.value;
        props.onChangePostText(newText)
    };

    let onSubmit = (formData) => {
        alert(formData.postField)
    }
    let postsElement = props.profilePage.postsData.map(p => <Post key={p.id} message={p.message} like={p.like} userProfile={props.profilePage.userProfile}/>);

    return (
        <div className={styles.content}>
            Мои посты
            <div className="newPost">
                <ReduxPostForm onSubmit={onSubmit} name={"postField"} maxLengthValue={10} />
            </div>
            {postsElement}
        </div>
    )
};



let ReduxPostForm = reduxForm({form:"postForm"})(FormComponent);

export default Posts;
