import React from 'react'
import classes from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {Post} from "./MyPosts/Post/Post";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";


export const Profile = (props) => {
    return <div className={classes.content}>
         <ProfileInfo/>
        <MyPosts
            newPostText={props.newPostText}
            updateNewPostText={props.updateNewPostText}
            addPost={props.addPost}
            posts={props.posts} />
        </div>


}