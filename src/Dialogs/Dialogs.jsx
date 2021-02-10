import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id
    return <div className={classes.dialog}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}

const Message = (props) => {
    return <div className={classes.dialog}>{props.message}</div>
}

let dialogsData = [
    {id: 1, name: 'Farid'},
    {id: 2, name: 'Sudjaat'},
    {id: 3, name: 'Rufat'},
    {id: 4, name: 'Adam'},
    {id: 5, name: 'Tamerlam'}
]

let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How do you do?'},
    {id: 3, message: "It's my first project men!"}
]
let messagesElement = messagesData.map((messages) => {
        return <Message id={messages.id} message={messages.message}/>
    })
let dialogsElement = dialogsData.map((dialogs) => {
        return <DialogItem id={dialogs.id} name={dialogs.name}/>
    } )


export const Dialogs = () => {
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