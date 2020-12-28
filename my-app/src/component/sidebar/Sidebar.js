import React from 'react';
import styles from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
import FriendsBlock from "./friends/Friends";

const Sidebar = (props) => {
  return (
    <nav className={styles.sidebar}>
        <div><NavLink to={"/profile"} activeClassName={styles.activeLink}>Profile</NavLink></div>
        <div><NavLink to={"/dialogs"} activeClassName={styles.activeLink}>Messages</NavLink></div>
        <div><NavLink to={"/users"} activeClassName={styles.activeLink}>Users</NavLink></div>
        <div><a>News</a></div>
        <div><a>Music</a></div>
        <div><a>Settings</a></div>
        <FriendsBlock friendsData={props.stateSidebarPage.friendsData}/>
    </nav>
    )
}

export default Sidebar;
