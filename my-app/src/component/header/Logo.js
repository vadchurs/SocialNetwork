import React from 'react';
import styles from './Logo.module.css';
import logotip from './../../logo-mortal-kombat.png';

const Logo = () => {
  return (
    <div className={styles.logo}>
        <img src={logotip} alt=""/>
    </div>
    )
}

export default Logo;
