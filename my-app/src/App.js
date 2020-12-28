import React from 'react';
import styles from './App.module.css';
import Sidebar from "./component/sidebar/Sidebar";
import {BrowserRouter, Route} from "react-router-dom";
import DialogsContainer from "./component/dialogs/DialogsContainer";
import UsersContainer from "./component/users/UsersContainer";
import ProfileContainer from "./component/profile/ProfileContainer";
import HeaderContainer from "./component/header/HeaderContainer";
import LoginPage from "./component/login/loginPage";
import {connect} from "react-redux";
import {initialized} from "./redux/AppReducer";
import Preloader from "./component/preloader/Preloader";

class App extends React.Component {
    componentDidMount() {
        this.props.initialized()
    }
    render() {
        if(!this.props.initializedApp){
            return <Preloader/>
        }
        return (
            <BrowserRouter>
                <div className={styles.App}>
                    <HeaderContainer/>
                    <div className={styles.wrapper}>
                        <Sidebar stateSidebarPage={this.props.state.sidebarPage}/>
                        <div className={styles.wrapperContent}>
                            <Route path={"/profile/:userId?"} render={() => <ProfileContainer/>}/>
                            <Route path={"/dialogs"} render={() => <DialogsContainer/>}/>
                            <Route path={"/users"} render={() => <UsersContainer/>}/>
                            <Route path={"/login"} render={() => <LoginPage/>}/>
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        )
    }
}

let mapStateToProps = (state) =>{
    return {
        initializedApp: state.app.initializedApp
    }
}
export default connect(mapStateToProps,{initialized})(App);
