import React from 'react'
import classes from './Dialogs.module.css'

export const Dialogs = () => {
    return (
        <div className={classes.dialogs}>
        <div className={classes.dialogsItems}>
            <div className={classes.dialog}>Farid</div>
            <div className={classes.dialog}>Sudjaat</div>
            <div className={classes.dialog}>Rufat</div>
            <div className={classes.dialog}>Adam</div>
            <div className={classes.dialog}>Tamerlan</div>
        </div>
            <div className={classes.messages}>
                <div className={classes.dialog}>Hi</div>
                <div className={classes.dialog}>How are you , bro?</div>
                <div className={classes.dialog}> It's my first project men</div>
            </div>

    </div>)
}