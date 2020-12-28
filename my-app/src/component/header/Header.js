import React from 'react';
import styles from './Header.module.css';
import Logo from "./Logo";
import HeaderTitle from "./HeaderTitle";
import {NavLink} from "react-router-dom";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <Logo/>
      <HeaderTitle/>
      <div className={styles.auth}>
          {props.isAuth ? <span>{props.userData.email} <button onClick={props.logout}>Logout</button></span> : <NavLink to={"/login"}>Login</NavLink>}
      </div>
    </div>
    )
};

export default Header;
