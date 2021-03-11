import React from 'react'
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {updateStatusTC} from "../redux/profile-reducer";


export const Profile = (props) => {

    return <div className={classes.content}>

        <ProfileInfo profile={props.profile } status={props.status} updateStatusTC={props.updateStatusTC}/>
        <hr/>
        <MyPostsContainer />
        </div>


}