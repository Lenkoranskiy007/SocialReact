import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from "react-router-dom";

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            <div className={classes.dialog}>
             <NavLink to='/dialogs/1 '>  Farid</NavLink>
            </div>
            <div className={classes.dialog}>
            <NavLink to='/dialogs/2'>Sudjaat</NavLink>
            </div>
            <div className={classes.dialog}>
               <NavLink to='/dialogs/3'>Rufat</NavLink>
            </div>
            <div className={classes.dialog}>
            <NavLink to='/dialogs/4'>Adam</NavLink>
            </div>
            <div className={classes.dialog}>
             <NavLink to='/dialogs/5'>Tamerlan</NavLink>
            </div>
        </div>
            <div className={classes.messages}>
                <div className={classes.dialog}>Hi</div>
                <div className={classes.dialog}>How are you , bro?</div>
                <div className={classes.dialog}> It's my first project men</div>
            </div>

    </div>)
}