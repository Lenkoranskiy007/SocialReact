import React from 'react'
import classes from './Dialogs.module.css';
import {DialogItem} from "./DilalogItem/DialogItem";
import {Message} from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../redux/dialogs-reducer";
import {Redirect} from "react-router";


export const Dialogs = (props) => {

       let messagesElement =  props.dialogsPage.messages.map((messages) => {
        return <Message id={messages.id} message={messages.message}/>
    })
    let dialogsElement = props.dialogsPage.dialogs.map((dialogs) => {
        return <DialogItem id={dialogs.id} name={dialogs.name}/>
    } )


    let addMessage = () => {
       props.onSendMessage()

    }

    let onChangeMessage = (e) => {
         let messageText = e.target.value
         props.onChangeMessage(messageText)

    }



    return (
        <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            {dialogsElement}
        </div>
            <div className={classes.messages}>
                {messagesElement}
                <textarea onChange={onChangeMessage} value={props.dialogsPage.newMessageText} ></textarea>
                <button onClick={addMessage}>send</button>
            </div>
        </div>)
    }