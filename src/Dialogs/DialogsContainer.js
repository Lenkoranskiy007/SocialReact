import React from 'react'
import {addMessageActionCreator, updateNewMessageActionCreator} from "../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

export const DialogsContainer = (props) => {
    let addMessage = () => {
        props.dispatch(addMessageActionCreator())

    }

    let onChangeMessage = (messageText) => {
        let action = updateNewMessageActionCreator(messageText)
        props.dispatch(action)

    }

    return(
        <Dialogs
            onChangeMessage={onChangeMessage}
            onSendMessage={addMessage}
            dialogsPage={props.dialogsPage} />
    )
}