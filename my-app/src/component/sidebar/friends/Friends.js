import React from 'react';
import styles from './Friends.module.css';
import {NavLink} from "react-router-dom";

const Friends = (props) => {
    return (
        <div className={styles.friends}>
            <img src={props.ava} alt=""/>
            <p>{props.name}</p>
        </div>
    )
}

const FriendsBlock = (props) => {
  return (
    <div className={styles.friendsBlock}>
        <NavLink to={"/friends"}>Friends</NavLink>
        <div className={styles.wrapperFriends}>
            <Friends name={props.friendsData[0].name} ava={props.friendsData[0].ava}/>
            <Friends name={props.friendsData[1].name} ava={props.friendsData[1].ava}/>
            <Friends name={props.friendsData[2].name} ava={props.friendsData[2].ava}/>
        </div>
    </div>
    )
}

export default FriendsBlock;
