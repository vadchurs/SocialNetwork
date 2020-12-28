import React, {useState} from 'react';
import styles from './Users.module.css'
import * as axios from "axios";
import userPhoto from '../../assets/images/user.jpg'
import {NavLink} from "react-router-dom";
import {userApi} from "../../api/api";
import {isFetching} from "../../redux/userPageReducer";


let Users = (props) => {
    let [portionNumber, setPortionNumber] = useState(1);
    let changePortionNumber = (newPortionNumber) => {
        setPortionNumber(newPortionNumber)
    };

    let users = props.usersPage.users.map((u) => <div className={styles.usersWrapper}>
        <div className={styles.avaBlock}>
            <div className={styles.ava}>
                <NavLink to={"/profile/" + u.id}>
                    <img src={u.photos.small ? u.photos.small : userPhoto} alt=""/>
                </NavLink>
            </div>
            <div>
                {u.followed ? <button disabled={props.usersPage.followingProgress.some(f =>f===u.id)} onClick={() => {
                        props.unFollow(u.id)
                    }}>unFollow</button> :
                    <button disabled={props.usersPage.followingProgress.some(f =>f===u.id)} onClick={() => {
                        props.follow(u.id)
                    }}>follow</button>}
            </div>
        </div>
        <div className={styles.discriptionBlock}>
            <div>
                <p>{u.name}</p>
                <p className={styles.status}>{u.status}</p>
            </div>
            <div>
                <p>id: {u.id}</p>
                <p></p>
            </div>
        </div>
    </div>);
    return (
        <div>
            <h1>Users</h1>
            <Paginator {...props} portionNumber={portionNumber} changePortionNumber={changePortionNumber}/>
            {users}
            <Paginator {...props} portionNumber ={portionNumber} changePortionNumber={changePortionNumber}/>
        </div>
    )

};

let Paginator = (props) => {
    let portionSize = 10;


    let leftPortionNumber = (props.portionNumber - 1) * portionSize + 1;
    let pagesArr = [];
    let pagesCounts = Math.ceil(props.usersPage.totalCount / props.usersPage.pageSize);
    let portionCounts = Math.ceil(pagesCounts/portionSize);
    let rightPortionNumber = props.portionNumber*portionSize;
    for (let i = 1; i <= pagesCounts; i++) {
        pagesArr.push(i);
    }

    let pages = pagesArr.filter(p => p>=leftPortionNumber && p <= rightPortionNumber).map((p) => <span onClick={() => props.changeCurrentPage(p)}
                                                                                                       className={props.usersPage.currentPage === p ? styles.selectedPage : ""}>{p} </span>);
    return (
        <div>
            {leftPortionNumber > 1 && <button onClick={()=>{props.changePortionNumber(props.portionNumber-1)}}>prev</button>}
            {pages}
            {portionCounts > props.portionNumber && <button onClick={()=>{props.changePortionNumber(props.portionNumber+1)}}>next</button>}
        </div>
    )
}

export default Users;
