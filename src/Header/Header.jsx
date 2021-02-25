import React from 'react'
import classes from './Header.module.css'
import {NavLink} from "react-router-dom";


export const Header = (props) => {
    return <header className={classes.header}>
                <img src="https://ak.picdn.net/shutterstock/videos/1020730591/thumb/7.jpg" alt=""/>
                <div className={classes.loginBlock} >
                    {props.isAuth? props.login:<NavLink to={'/login'} >Login</NavLink>
                    }
                </div>

    </header>


}