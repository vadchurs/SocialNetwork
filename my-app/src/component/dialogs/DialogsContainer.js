import React from 'react';
import {onChangeMessageBodyAC, onSendMessageTextAC} from "../../redux/dialogPageReducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../../authRedirect/authRedirect";

    const mapStateToProps = (state) => {
        return {
            dialogPage:state.dialogPage
        }
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            onChangeMessageBody: (messageBody) =>{dispatch(onChangeMessageBodyAC(messageBody))},
            onSendMessage: () => {dispatch(onSendMessageTextAC())}
        }
    };


export default compose(connect(mapStateToProps,mapDispatchToProps),withAuthRedirect)(Dialogs);
