import React from 'react'
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


export const Profile = (props) => {

    return <div className={classes.content}>
         <ProfileInfo/>
        <MyPosts

            newPostText={props.newPostText}
            dispatch={props.dispatch}
            posts={props.posts} />
        </div>


}