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

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            <DialogItem name='Farid' id='1'/>
           <DialogItem name='Sudjaat' id='2'/>
           <DialogItem name='Rufat' id='3'/>
           <DialogItem name='Adam' id='4'/>
           <DialogItem name='Tamerlan' id='5'/>

        </div>
            <div className={classes.messages}>
                <Message message='Hi'/>
                <Message message='How do you do?'/>
                <Message message="It's my first project bro!"/>
            </div>
        </div>)
    }