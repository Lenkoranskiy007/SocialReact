import React from 'react'
import classes from './Dialogs.module.css';
import {DialogItem} from "./DilalogItem/DialogItem";
import {Message} from "./Message/Message";
import {addMessageActionCreator, updateNewMessageActionCreator} from "../redux/State";


export const Dialogs = (props) => {
       let messagesElement = props.messages.map((messages) => {
        return <Message id={messages.id} message={messages.message}/>
    })
    let dialogsElement = props.dialogs.map((dialogs) => {
        return <DialogItem id={dialogs.id} name={dialogs.name}/>
    } )

   let newMessageElement = React.createRef()
    let addMessage = () => {
       props.dispatch(addMessageActionCreator())
    }

    let onMessageChange = () => {
         let messageText = newMessageElement.current.value
         props.dispatch(updateNewMessageActionCreator(messageText))
    }

    return (
        <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            {dialogsElement}
        </div>
            <div className={classes.messages}>
                {messagesElement}
                <textarea onChange={onMessageChange} ref={newMessageElement} value={props.newMessageText}></textarea>
                <button onClick={addMessage}>add message</button>
            </div>
        </div>)
    }