import React from 'react';
import styles from './Post.module.css';
import Preloader from "../../../preloader/Preloader";

const Post = (props) => {
    if(!props.userProfile){
        return (
            <Preloader/>
        )
    }
  return (
    <div className={styles.post}>
        <img src={props.userProfile.photos.small ? props.userProfile.photos.small : "https://i.ya-webdesign.com/images/user-avatar-png-7.png"} alt=""/>
        <span>{props.message}</span><br/>
        <span> like {props.like}</span>
    </div>
    )
}

export default Post;
