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

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
            <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            <DialogItem name={dialogsData[2].name} id={dialogsData[2].id}/>
            <DialogItem name={dialogsData[3].name} id={dialogsData[3].id}/>
            <DialogItem name={dialogsData[4].name} id={dialogsData[4].id}/>
        </div>
            <div className={classes.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
                <Message message={messagesData[2].message}/>
            </div>
        </div>)
    }