import React from 'react'
import {addMessageActionCreator, updateNewMessageActionCreator} from "../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../hoc/withAutthRedirect";
import {compose} from "redux";

const mapStateToProps  = (state) => {
    return {
        dialogsPage: state.dialogsPage

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: () => {
            dispatch(addMessageActionCreator())
        },
        onChangeMessage: (messageText) => {
            let action = updateNewMessageActionCreator(messageText)
            dispatch(action)
        }
    }
}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

