import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import {DialogItem} from "./DilalogItem/DialogItem";
import {Message} from "./Message/Message";


export const Dialogs = (props) => {

    let messagesElement = props.messages.map((messages) => {
        return <Message id={messages.id} message={messages.message}/>
    })
    let dialogsElement = props.dialogs.map((dialogs) => {
        return <DialogItem id={dialogs.id} name={dialogs.name}/>
    } )

    return (
        <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            {dialogsElement}
        </div>
            <div className={classes.messages}>
                {messagesElement}
            </div>
        </div>)
    }